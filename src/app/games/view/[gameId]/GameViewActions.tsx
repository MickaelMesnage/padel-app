import { GameViewCancelButton } from "@/app/games/view/[gameId]/GameViewCancelButton";
import { GameViewDeleteButton } from "@/app/games/view/[gameId]/GameViewDeleteButton";
import { GameViewUpdateButton } from "@/app/games/view/[gameId]/GameViewUpdateButton";
import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { getSession } from "@/lib/auth/getSession";

interface GameViewActionsProps {
  game: Game;
}

export const GameViewActions = async ({ game }: GameViewActionsProps) => {
  const gameEntity = new GameEntity(game);
  const session = await getSession();

  const userCanUpdateGame = session
    ? gameEntity.canUserUpdateGame({ userId: session.id })
    : false;

  const userCanDeleteGame = session
    ? gameEntity.canUserDeleteGame({ userId: session.id })
    : false;

  const userCanCancelGame = session
    ? gameEntity.canUserCancelGame({ userId: session.id })
    : false;

  return (
    <div className="flex items-center gap-4">
      {userCanUpdateGame && <GameViewUpdateButton game={game} />}
      {userCanDeleteGame && <GameViewDeleteButton game={game} />}
      {userCanCancelGame && <GameViewCancelButton game={game} />}
    </div>
  );
};
