import { Game, GameEntity } from "@/application/domain/game/game.entity";
import Link from "next/link";
import { PATHS } from "@/PATHS";
import { Button } from "@/components/ui/button";
import { getConnectedUser } from "@/lib/auth/getConnectedUser";

interface GameViewActionsProps {
  game: Game;
}

export const GameViewActions = async ({ game }: GameViewActionsProps) => {
  const gameEntity = new GameEntity(game);
  const user = await getConnectedUser();

  const userCanJoinGame = user?.id
    ? gameEntity.canUserJoinGame({ userId: user?.id })
    : false;

  const userCanLeaveGame = user?.id
    ? gameEntity.canUserLeaveGame({ userId: user?.id })
    : false;

  return (
    <div className="flex items-center gap-4">
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
