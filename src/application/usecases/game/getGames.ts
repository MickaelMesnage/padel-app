import { Game } from "@/application/domain/game/game.entity";
import prisma from "@/lib/prisma/prisma";

export const getGames = async (): Promise<Game[]> => {
  const games = await prisma.game.findMany({
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
