"use client";

import { Game } from "@/application/domain/game/game.entity";
import { gameCancelAction } from "@/components/organisms/game/gameCancel.action";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/PATHS";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface GameViewCancelButtonProps {
  game: Game;
}

export const GameViewCancelButton = ({ game }: GameViewCancelButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    try {
      startTransition(async () => {
        const res = await gameCancelAction({ gameId: game.id });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Annonce annulée");
        router.push(PATHS.home);
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <Button onClick={onClick} disabled={isPending} variant="destructive">
      Annuler
    </Button>
  );
};
