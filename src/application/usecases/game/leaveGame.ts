import prisma from "@/lib/prisma/prisma";

import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";

export const LEAVE_GAME_ERROR = {
  USER_CANNOT_LEAVE_GAME: "User cannot leave game",
};

export const leaveGame = async ({
  gameId,
  userId,
}: {
  gameId: string;
  userId: string;
}) => {
  const game = await getGameById({ gameId });

  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserLeaveGame({ userId })) {
    throw new Error(LEAVE_GAME_ERROR.USER_CANNOT_LEAVE_GAME);
  }

  const updatedGame = await prisma.game.update({
    where: { id: gameId },
    data: {
      participations: {
        delete: {
          userId_gameId: {
            userId,
            gameId,
          },
        },
      },
    },
  });

  return updatedGame;
};
