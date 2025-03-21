"use client";

import { gameCancelAction } from "@/components/organisms/game/gameCancel.action";
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
        const res = await gameCancelAction({ gameId });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Annonce annulée");
        // router.back();
        router.replace(PATHS.games.list);
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <AlertDialogAction disabled={isPending} onClick={onClick}>
      Annuler
    </AlertDialogAction>
  );
};
