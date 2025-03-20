import { Game } from "@/application/domain/game/game.entity";
import prisma from "@/lib/prisma/prisma";

export const getUserGames = async ({
  userId,
}: {
  userId: string;
}): Promise<Game[]> => {
  const games = await prisma.game.findMany({
    where: {
      OR: [{ creatorUserId: userId }, { participations: { some: { userId } } }],
    },
    include: {
      creator: {
        include: {
          profile: true,
        },
      },
      participations: {
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      },
      padelComplex: true,
    },
  });
  return games;
};
