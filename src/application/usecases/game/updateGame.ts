import { Level } from "@/application/domain/constants/level.const";
import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
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
    nbOfPlayersToFind: number;
    level: Level;
    description: string;
    padelComplexId: string;
  };
}) => {
  const game = await getGameById({ gameId });

  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserUpdateGame({ userId })) {
    throw new Error(UPDATE_GAME_ERROR.USER_CANNOT_UPDATE_GAME);
  }

  const updatedGame = await prisma.game.update({
    where: { id: gameId },
    data,
  });

  return updatedGame;
};
