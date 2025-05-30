import { Level } from "@/application/domain/constants/level.const";
import { joinGame } from "@/application/usecases/game/joinGame";
import prisma from "@/lib/prisma/prisma";

export const createGame = async ({
  userId,
  data,
}: {
  userId: string;
  data: {
    dateTime: string;
    durationInMinutes: number;
    nbOfPlayersToFind: number;
    level: Level;
    description: string;
    padelComplexId: string;
  };
}) => {
  const game = await prisma.game.create({
    data: {
      ...data,
      creatorUserId: userId,
    },
  });

  await joinGame({ userId, gameId: game.id });

  return game;
};
