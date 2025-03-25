import { GameCardNbOfMissingPlayersBadge } from "@/components/organisms/game/GameCard/GameCardNbOfMissingPlayersBadge";
import { GameCardPadelComplex } from "@/components/organisms/game/GameCard/GameCardPadelDetails";
import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { GameCardLevelBadge } from "@/components/organisms/game/GameCard/GameCardLevelBadge";
import { GameCardTitleTime } from "@/components/organisms/game/GameCard/GameCardTitleTime";
import { GameCardCreatorBadge } from "@/components/organisms/game/GameCard/GameCardCreatorBadge";
import { GameCardIsCancelledBadge } from "@/components/organisms/game/GameCard/GameCardIsCancelledBadge";

interface GameCardMainDetailsProps {
  game: Game;
  className?: React.ComponentProps<"div">["className"];
}

export const GameCardMainDetails = ({ game }: GameCardMainDetailsProps) => {
  const { nbOfMissingPlayers } = new GameEntity(game);

  return (
    <div className="flex flex-col gap-4">
      <GameCardIsCancelledBadge isCancelled={game.isCancelled} />
      <GameCardTitleTime game={game} />
      <div className="flex flex-row flex-wrap gap-2">
        <GameCardCreatorBadge game={game} />
        <GameCardLevelBadge level={game.level} />
        <GameCardNbOfMissingPlayersBadge
          nbOfMissingPlayers={nbOfMissingPlayers}
        />
      </div>
      <GameCardPadelComplex game={game} />
    </div>
  );
};
