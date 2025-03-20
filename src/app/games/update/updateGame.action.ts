"use server";

import { updateGame } from "@/application/usecases/game/updateGame";
import { gameFormSchema } from "@/components/organisms/game/game.schema";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = gameFormSchema
  .omit({ time: true, date: true })
  .merge(z.object({ dateTime: z.string().datetime(), gameId: z.string() }));

export const updateGameAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: data, ctx: { user } }) => {
    await updateGame({ userId: user.id, gameId: data.gameId, data });

    revalidatePath("/");

    return { success: true };
  });
