"use client";

import { logoutAction } from "@/components/layout/Header/logoutAction";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth/auth-client";
import { PATHS } from "@/PATHS";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const LogoutMenuItem = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = async () => {
    startTransition(async () => {
      await authClient.signOut();
      await logoutAction();
      router.push(PATHS.home);
    });
  };

  return (
    <DropdownMenuItem disabled={isPending} onClick={onClick}>
      <LogOutIcon className="h-4 w-4" />
      Se déconnecter
    </DropdownMenuItem>
  );
};
