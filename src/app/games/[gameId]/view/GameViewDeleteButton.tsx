"use client";

import { Game } from "@/application/domain/game/game.entity";
import { gameDeleteAction } from "@/components/organisms/game/gameDelete.action";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/PATHS";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface GameViewDeleteButtonProps {
  game: Game;
}

export const GameViewDeleteButton = ({ game }: GameViewDeleteButtonProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    try {
      startTransition(async () => {
        const res = await gameDeleteAction({ gameId: game.id });

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
    // <Button onClick={onClick} disabled={isPending} variant="destructive">
    //   Supprimer
    // </Button>
    <Link href={PATHS.games.delete({ gameId: game.id })} passHref>
      <Button variant="destructive">Supprimer via modal</Button>
    </Link>
  );
};
