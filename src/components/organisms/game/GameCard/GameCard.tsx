import { GameCardNbOfMissingPlayersBadge } from "@/components/organisms/game/GameCard/GameCardNbOfMissingPlayersBadge";
import { GameCardPadelComplex } from "@/components/organisms/game/GameCard/GameCardPadelDetails";
import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { Card, CardContent } from "@/components/ui/card";
import { GameCardLevelBadge } from "@/components/organisms/game/GameCard/GameCardLevelBadge";
import { GameCardTitleTime } from "@/components/organisms/game/GameCard/GameCardTitleTime";
import { GameCardCreatorBadge } from "@/components/organisms/game/GameCard/GameCardCreatorBadge";
import { GameCardIsCancelledBadge } from "@/components/organisms/game/GameCard/GameCardIsCancelledBadge";

interface GameCardProps {
  game: Game;
  className?: React.ComponentProps<"div">["className"];
}

export const GameCard = ({ game, className }: GameCardProps) => {
  const { nbOfMissingPlayers } = new GameEntity(game);

  return (
    <Card className={className}>
      <CardContent className="flex flex-col gap-4">
        <GameCardIsCancelledBadge isCancelled={game.isCancelled} />
        <GameCardTitleTime game={game} />
        <div className="flex flex-row gap-2">
          <GameCardCreatorBadge game={game} />
          <GameCardLevelBadge level={game.level} />
          <GameCardNbOfMissingPlayersBadge
            nbOfMissingPlayers={nbOfMissingPlayers}
          />
        </div>
        <GameCardPadelComplex game={game} />
        {/* <GameCardCreator creator={game.creator} /> */}
      </CardContent>
    </Card>
  );
};
