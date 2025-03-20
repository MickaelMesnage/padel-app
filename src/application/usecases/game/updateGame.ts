import { Level } from "@/application/domain/constants/level.const";
import { GameEntity } from "@/application/domain/game/game.entity";
import prisma from "@/lib/prisma/prisma";

export const UPDATE_GAME_ERROR = {
  USER_CANNOT_UPDATE_GAME: "User cannot update game",
};

export const updateGame = async ({
  userId,
  gameId,
  data,
}: {
  userId: string;
  gameId: string;
  data: {
    dateTime: string;
    durationInMinutes: number;
    nbMissingPlayers: number;
    level: Level;
    description: string;
  };
}) => {
  const game = await prisma.game.findUniqueOrThrow({
    where: { id: gameId },
    include: {
      participations: {
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      },
    },
  });

  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserUpdateGame({ userId })) {
    throw new Error(UPDATE_GAME_ERROR.USER_CANNOT_UPDATE_GAME);
  }

  const updatedGame = await prisma.game.update({
    where: { id: gameId },
    data: { ...data },
  });

  return updatedGame;
};
