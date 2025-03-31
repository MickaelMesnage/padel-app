import { GameViewDetailsActions } from "@/app/games/[gameId]/view/GameViewDetailsActions";
import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { ButtonSmall } from "@/components/atoms/SmallButton";
import { GameCardMainDetails } from "@/components/organisms/game/GameCard/GameCardMainDetails";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PATHS } from "@/PATHS";
import Link from "next/link";
import { getConnectedUser } from "@/lib/auth/getConnectedUser";

interface GameViewDetailsProps {
  game: Game;
}

export const GameViewDetails = async ({ game }: GameViewDetailsProps) => {
  const user = await getConnectedUser();
  const gameEntity = new GameEntity(game);

  const userCanJoinGame = user?.id
    ? gameEntity.canUserJoinGame({ userId: user.id })
    : false;

  const userCanLeaveGame = user?.id
    ? gameEntity.canUserLeaveGame({ userId: user.id })
    : false;

  return (
    <Card>
      <CardContent>
        <div className="flex items-start justify-between gap-4">
          <GameCardMainDetails game={game} />
          <GameViewDetailsActions game={game} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-gray-200">
        {userCanJoinGame && (
          <Link href={PATHS.games.join({ gameId: game.id })}>
            <ButtonSmall label="Rejoindre" />
          </Link>
        )}
        {userCanLeaveGame && (
          <Link href={PATHS.games.leave({ gameId: game.id })}>
            <ButtonSmall variant="decline" label="Supprimer ma participation" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};
