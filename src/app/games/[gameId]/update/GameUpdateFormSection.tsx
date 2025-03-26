import { GameUpdateFormContainer } from "@/app/games/[gameId]/update/GameUpdateFormContainer";
import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
import { getPadelComplexs } from "@/application/usecases/padel-complex/getPadelComplexs";
import { CardWrapper } from "@/components/molecules/CardWrapper";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { unauthorized } from "next/navigation";

interface GameUpdateFormSectionProps {
  gameId: string;
}

export const GameUpdateFormSection = async ({
  gameId,
}: GameUpdateFormSectionProps) => {
  const { id: userId } = await getAuthenticatedUser();
  const game = await getGameById({ gameId });
  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserUpdateGame({ userId })) {
    unauthorized();
  }

  const padelComplexs = await getPadelComplexs();

  return (
    <CardWrapper>
      <GameUpdateFormContainer game={game} padelComplexs={padelComplexs} />
    </CardWrapper>
  );
};
