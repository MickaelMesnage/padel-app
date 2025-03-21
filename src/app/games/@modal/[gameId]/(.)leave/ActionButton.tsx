"use client";

import { gameLeaveAction } from "@/components/organisms/game/gameLeave.action";
import { AlertDialogAction } from "@/components/ui/alert-dialog";
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
        const res = await gameLeaveAction({ gameId });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Vous avez supprimé votre participation");
        router.back();
        router.refresh();
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <AlertDialogAction disabled={isPending} onClick={onClick}>
      Supprimer la participation
    </AlertDialogAction>
  );
};
