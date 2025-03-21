"use client";

import { Game } from "@/application/domain/game/game.entity";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/PATHS";
import Link from "next/link";

interface GameViewUpdateButtonProps {
  game: Game;
}

export const GameViewUpdateButton = ({ game }: GameViewUpdateButtonProps) => {
  return (
    <Link href={PATHS.games.update({ gameId: game.id })} passHref>
      <Button>Modifier</Button>
    </Link>
  );
};
