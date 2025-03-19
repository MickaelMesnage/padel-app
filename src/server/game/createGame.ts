import { Level } from "@/domain/user/user.constants";
import prisma from "@/lib/prisma/prisma";

export const createGame = async ({
  userId,
  data,
}: {
  userId: string;
  data: {
    dateTime: string;
    durationInMinutes: number;
    nbMissingPlayers: number;
    level: Level;
    description?: string | undefined;
  };
}) => {
  const game = await prisma.game.create({
    data: {
      ...data,
      creatorUserId: userId,
    },
  });

  return game;
};
