import { Game } from "@/application/domain/game/game.entity";
import { GameCardMainDetails } from "@/components/organisms/game/GameCard/GameCardMainDetails";
import { Card, CardContent } from "@/components/ui/card";

interface GameViewDetailsProps {
  game: Game;
}

export const GameViewDetails = ({ game }: GameViewDetailsProps) => {
  return (
    <Card>
      <CardContent>
        <GameCardMainDetails game={game} />
      </CardContent>
    </Card>
  );
};
