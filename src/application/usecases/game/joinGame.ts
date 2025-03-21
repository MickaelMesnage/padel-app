import prisma from "@/lib/prisma/prisma";

import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";

export const JOIN_GAME_ERROR = {
  USER_CANNOT_JOIN_GAME: "User cannot join game",
};

export const joinGame = async ({
  gameId,
  userId,
}: {
  gameId: string;
  userId: string;
}) => {
  const game = await getGameById({ gameId });

  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserJoinGame({ userId })) {
    throw new Error(JOIN_GAME_ERROR.USER_CANNOT_JOIN_GAME);
  }

  const updatedGame = await prisma.game.update({
    where: { id: gameId },
    data: {
      participations: {
        create: {
          userId,
        },
      },
    },
  });

  return updatedGame;
};
