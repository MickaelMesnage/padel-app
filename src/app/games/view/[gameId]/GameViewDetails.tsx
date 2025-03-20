import { Game } from "@/application/domain/game/game.entity";
import { GameCard } from "@/components/organisms/game/GameCard/GameCard";

interface GameViewDetailsProps {
  game: Game;
}

export const GameViewDetails = ({ game }: GameViewDetailsProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Détails de la partie</h1>
      <GameCard game={game} />
    </div>
  );
};
