import { LogoutMenuItem } from "@/components/layout/Header/LogoutMenuItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PATHS } from "@/PATHS";
import { ListIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export const HeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-body rounded-full p-1">
          <UserIcon className="size-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild className="lg:hidden">
          <Link href={PATHS.games.list}>
            <ListIcon className="size-4" />
            Annonces
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="lg:hidden" />
        <DropdownMenuItem asChild>
          <Link href={PATHS.profile}>
            <UserIcon className="size-4" />
            Mon profil
          </Link>
        </DropdownMenuItem>
        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
