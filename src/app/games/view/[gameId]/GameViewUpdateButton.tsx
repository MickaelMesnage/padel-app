"use client";

import { Game } from "@/application/domain/game/game.entity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GameViewUpdateButtonProps {
  game: Game;
}

export const GameViewUpdateButton = ({ game }: GameViewUpdateButtonProps) => {
  return (
    <Link href={`/games/update/${game.id}`} passHref>
      <Button>Modifier</Button>
    </Link>
  );
};
