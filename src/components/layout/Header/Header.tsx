import { HeaderMenu } from "@/components/layout/Header/HeaderMenu";
import { LoginButton } from "@/components/layout/Header/LoginButton";
import { isUserAuthenticated } from "@/lib/auth/isUserAuthenticated";
import { PATHS } from "@/PATHS";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  const isAuthenticated = await isUserAuthenticated();

  return (
    <header className="border-b bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={PATHS.home}>
            <Image
              height={24}
              width={120}
              src="/fullmotiv-light.svg"
              alt="logo"
              className="h-8 w-auto hidden md:block"
            />
            <Image
              height={24}
              width={24}
              src="/short-fullmotiv-light.svg"
              alt="logo"
              className="h-8 w-auto md:hidden"
            />
          </Link>
          {isAuthenticated ? <HeaderMenu /> : <LoginButton />}
        </div>
      </div>
    </header>
  );
};
