import { LoginButton } from "@/components/layout/Header/LoginButton";
import { LogoutButton } from "@/components/layout/Header/LogoutButton";
import { isUserAuthenticated } from "@/lib/auth/isUserAuthenticated";
import { PATHS } from "@/PATHS";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  const isAuthenticated = await isUserAuthenticated();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={PATHS.home}>
            <Image
              height={24}
              width={120}
              src="/logotype-fullmotiv-dark.svg"
              alt="logo"
            />
          </Link>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </header>
  );
};
