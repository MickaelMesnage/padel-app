import { LogoutMenuItem } from "@/components/layout/Header/LogoutMenuItem";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PATHS } from "@/PATHS";
import { ListIcon, MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export const HeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={PATHS.profile}>
            <UserIcon className="size-4" />
            Mon profil
          </Link>
          <Link href={PATHS.games.list}>
            <ListIcon className="size-4" />
            Games
          </Link>
        </DropdownMenuItem>
        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
