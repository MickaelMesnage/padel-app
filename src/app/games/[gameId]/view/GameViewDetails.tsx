import { GameViewDetailsActions } from "@/app/games/[gameId]/view/GameViewDetailsActions";
import { Game } from "@/application/domain/game/game.entity";
import { GameCardMainDetails } from "@/components/organisms/game/GameCard/GameCardMainDetails";
import { Card, CardContent } from "@/components/ui/card";

interface GameViewDetailsProps {
  game: Game;
}

export const GameViewDetails = ({ game }: GameViewDetailsProps) => {
  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4">
        <GameCardMainDetails game={game} />
        <GameViewDetailsActions game={game} />
      </CardContent>
    </Card>
  );
};
