"use server";

import { cancelGame } from "@/application/usecases/game/cancelGame";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  gameId: z.string(),
});

export const gameCancelAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: { gameId }, ctx: { user } }) => {
    await cancelGame({ userId: user.id, gameId });

    revalidatePath("/");
  });
