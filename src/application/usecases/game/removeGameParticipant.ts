import prisma from "@/lib/prisma/prisma";

import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";

export const REMOVE_GAME_PARTICIPANT_ERROR = {
  USER_CANNOT_REMOVE_PARTICIPANT: "User cannot remove participant",
};

export const removeGameParticipant = async ({
  gameId,
  userId,
  participantId,
}: {
  gameId: string;
  userId: string;
  participantId: string;
}) => {
  const game = await getGameById({ gameId });

  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserRemoveParticipant({ userId })) {
    throw new Error(
      REMOVE_GAME_PARTICIPANT_ERROR.USER_CANNOT_REMOVE_PARTICIPANT
    );
  }

  const updatedGame = await prisma.game.update({
    where: { id: gameId },
    data: {
      participations: {
        delete: {
          userId_gameId: {
            userId: participantId,
            gameId,
          },
        },
      },
    },
  });

  return updatedGame;
};
