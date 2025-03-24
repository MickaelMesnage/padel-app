"use server";

import { removeGameParticipant } from "@/application/usecases/game/removeGameParticipant";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  gameId: z.string(),
  participantId: z.string(),
});

export const gameRemoveParticipantAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: { gameId, participantId }, ctx: { user } }) => {
    await removeGameParticipant({
      userId: user.id,
      gameId,
      participantId,
    });

    revalidatePath("/");
  });
