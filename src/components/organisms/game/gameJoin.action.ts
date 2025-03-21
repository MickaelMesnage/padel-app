"use server";

import { joinGame } from "@/application/usecases/game/joinGame";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  gameId: z.string(),
});

export const gameJoinAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: { gameId }, ctx: { user } }) => {
    await joinGame({ userId: user.id, gameId });

    revalidatePath("/");
  });
