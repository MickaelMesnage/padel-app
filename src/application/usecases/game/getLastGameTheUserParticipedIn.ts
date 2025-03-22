import { Game } from "@/application/domain/game/game.entity";
import prisma from "@/lib/prisma/prisma";

export const getLastGameTheUserParticipatedIn = async ({
  userId,
}: {
  userId: string;
}): Promise<Game | null> => {
  const games = await prisma.game.findMany({
    where: {
      isCancelled: false,
      OR: [
        {
          participations: {
            some: {
              userId,
            },
          },
        },
        {
          creator: {
            id: userId,
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 1,
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
  return games.length > 0 ? games[0] : null;
};
