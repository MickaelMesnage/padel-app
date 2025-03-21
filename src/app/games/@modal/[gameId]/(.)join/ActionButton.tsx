"use client";

import { gameJoinAction } from "@/components/organisms/game/gameJoin.action";
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
        const res = await gameJoinAction({ gameId });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Vous avez rejoint le match");
        router.back();
        router.refresh();
        // router.push(PATHS.games.view({ gameId }));
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <AlertDialogAction disabled={isPending} onClick={onClick}>
      Rejoindre
    </AlertDialogAction>
  );
};
