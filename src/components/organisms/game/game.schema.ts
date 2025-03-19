import { LEVELS } from "@/domain/user/user.constants";
import { z } from "zod";

export const gameFormSchema = z.object({
  date: z.string(),
  time: z.string(),
  durationInMinutes: z.coerce.number().positive(),
  nbMissingPlayers: z.coerce.number().positive(),
  description: z.string().optional(),
  level: z.enum(LEVELS, { required_error: "Le niveau est obligatoire" }),
});

export type GameFormValues = z.infer<typeof gameFormSchema>;
