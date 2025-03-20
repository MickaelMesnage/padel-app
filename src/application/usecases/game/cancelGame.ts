import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
import prisma from "@/lib/prisma/prisma";

export const cancelGame = async ({
  userId,
  gameId,
}: {
  userId: string;
  gameId: string;
}) => {
  const game = await getGameById({ gameId });
  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserCancelGame({ userId })) {
    throw new Error("You cant cancel this game");
  }

  const updatedGame = await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      isCancelled: true,
    },
  });

  return updatedGame;
};
