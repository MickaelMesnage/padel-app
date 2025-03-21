import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { getSession } from "@/lib/auth/getSession";
import Link from "next/link";
import { PATHS } from "@/PATHS";
import { Button } from "@/components/ui/button";

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

  const userCanJoinGame = session
    ? gameEntity.canUserJoinGame({ userId: session.id })
    : false;

  const userCanLeaveGame = session
    ? gameEntity.canUserLeaveGame({ userId: session.id })
    : false;

  return (
    <div className="flex items-center gap-4">
      {userCanUpdateGame && (
        <Link href={PATHS.games.update({ gameId: game.id })} passHref>
          <Button>Modifier</Button>
        </Link>
      )}
      {userCanDeleteGame && (
        <Link href={PATHS.games.delete({ gameId: game.id })} passHref>
          <Button variant="destructive">Supprimer</Button>
        </Link>
      )}
      {userCanCancelGame && (
        <Link href={PATHS.games.cancel({ gameId: game.id })} passHref>
          <Button variant="destructive">Annuler</Button>
        </Link>
      )}
      {userCanJoinGame && (
        <Link href={PATHS.games.join({ gameId: game.id })} passHref>
          <Button>Rejoindre</Button>
        </Link>
      )}
      {userCanLeaveGame && (
        <Link href={PATHS.games.leave({ gameId: game.id })} passHref>
          <Button variant="destructive">Supprimer la participation</Button>
        </Link>
      )}
    </div>
  );
};
