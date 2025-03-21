"use client";

import { gameDeleteAction } from "@/components/organisms/game/gameDelete.action";
import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { PATHS } from "@/PATHS";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionButtonProps {
  gameId: string;
}

export const ActionButton = ({ gameId }: ActionButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    try {
      startTransition(async () => {
        const res = await gameDeleteAction({ gameId });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Annonce supprimée");
        router.push(PATHS.games.list);
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <AlertDialogAction disabled={isPending} onClick={onClick}>
      Continue
    </AlertDialogAction>
  );
};
