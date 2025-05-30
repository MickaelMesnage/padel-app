"use server";

import { createGame } from "@/application/usecases/game/createGame";
import { gameFormSchema } from "@/components/organisms/game/game.schema";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = gameFormSchema
  .omit({ time: true, date: true })
  .merge(z.object({ dateTime: z.string().datetime() }));

export const createGameAction = authenticatedAction
  .schema(schema)
  .action(async ({ parsedInput: data, ctx: { user } }) => {
    await createGame({ userId: user.id, data });

    revalidatePath("/");
  });
