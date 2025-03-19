import prisma from "@/lib/prisma/prisma";

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
    description?: string | undefined;
  };
}) => {
  const game = await prisma.game.findUniqueOrThrow({
    where: {
      id: gameId,
    },
  });
};
