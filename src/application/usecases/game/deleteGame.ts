import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
import prisma from "@/lib/prisma/prisma";

export const deleteGame = async ({
  userId,
  gameId,
}: {
  userId: string;
  gameId: string;
}) => {
  const game = await getGameById({ gameId });
  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserDeleteGame({ userId })) {
    throw new Error("You cant delete this game");
  }

  await prisma.game.delete({
    where: {
      id: gameId,
    },
  });
};
