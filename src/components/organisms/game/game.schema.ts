import { LEVELS } from "@/application/domain/constants/level.const";
import { z } from "zod";

export const gameFormSchema = z.object({
  padelComplexId: z.string().min(1, { message: "Le complexe est obligatoire" }),
  date: z.string().min(1, { message: "La date est obligatoire" }),
  time: z.string().min(1, { message: "L'heure est obligatoire" }),
  durationInMinutes: z.coerce.number().positive(),
  nbOfPlayersToFind: z.coerce.number().positive(),
  description: z.string(),
  level: z.enum(LEVELS, { required_error: "Le niveau est obligatoire" }),
});

export type GameFormValues = z.infer<typeof gameFormSchema>;
