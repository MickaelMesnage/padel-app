import { Game } from "@/application/domain/game/game.entity";
import prisma from "@/lib/prisma/prisma";

export const getGameById = async ({
  gameId,
}: {
  gameId: string;
}): Promise<Game> => {
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
      padelComplex: true,
      creator: {
        include: {
          profile: true,
        },
      },
    },
  });

  return game;
};
