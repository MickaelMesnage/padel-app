import { HeaderMenu } from "@/components/layout/Header/HeaderMenu";
import { LoginButton } from "@/components/layout/Header/LoginButton";
import { Button } from "@/components/ui/button";
import { isUserAuthenticated } from "@/lib/auth/isUserAuthenticated";
import { PATHS } from "@/PATHS";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  const isAuthenticated = await isUserAuthenticated();

  return (
    <header className="bg-foreground">
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
          <div className="flex items-center gap-4">
            <Link className="hidden lg:block" href={PATHS.games.list} passHref>
              <Button variant="link" className="text-body">
                Annonces
              </Button>
            </Link>
            <Link href={PATHS.games.create} passHref>
              <Button variant="outline">
                <PlusIcon className="size-4" />
                <span className="md:hidden">Créer</span>
                <span className="hidden md:block">Créer une annonce</span>
              </Button>
            </Link>
            {isAuthenticated ? <HeaderMenu /> : <LoginButton />}
          </div>
        </div>
      </div>
    </header>
  );
};
