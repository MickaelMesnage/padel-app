"use client";

import { gameRemoveParticipantAction } from "@/components/organisms/game/gameRemoveParticipant.action";
import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionButtonProps {
  gameId: string;
  participantId: string;
}

export const ActionButton = ({ gameId, participantId }: ActionButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    try {
      startTransition(async () => {
        const res = await gameRemoveParticipantAction({
          gameId,
          participantId,
        });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Vous avez supprimé la participation de ce joueur");
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
