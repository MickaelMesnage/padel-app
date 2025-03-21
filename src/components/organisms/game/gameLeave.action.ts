"use server";

import { leaveGame } from "@/application/usecases/game/leaveGame";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  gameId: z.string(),
});

export const gameLeaveAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: { gameId }, ctx: { user } }) => {
    await leaveGame({ userId: user.id, gameId });

    revalidatePath("/");
  });
