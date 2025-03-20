"use server";

import { deleteGame } from "@/application/usecases/game/deleteGame";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  gameId: z.string(),
});

export const gameDeleteAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: { gameId }, ctx: { user } }) => {
    await deleteGame({ userId: user.id, gameId });

    revalidatePath("/");
  });
