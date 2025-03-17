import { LogoutMenuItem } from "@/components/layout/Header/LogoutMenuItem";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PATHS } from "@/PATHS";
import { MenuIcon, UserIcon } from "lucide-react";
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
            <UserIcon className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
