import { LEVELS } from "@/application/domain/constants/level.const";
import { z } from "zod";

export const gameFormSchema = z.object({
  padelComplexId: z.string().min(1, { message: "Le complexe est obligatoire" }),
  date: z.string().min(1, { message: "La date est obligatoire" }),
  time: z.string().min(1, { message: "L'heure est obligatoire" }),
  durationInMinutes: z
    .number({ required_error: "Ce champs est required" })
    .positive({ message: "La durée doit être supérieure à 0" }),
  nbOfPlayersToFind: z
    .number({ required_error: "Ce champs est required" })
    .positive({
      message: "Le nombre de joueurs à trouver doit être supérieur à 0",
    })
    .max(4, {
      message: "Le nombre de joueurs à trouver doit être inférieur à 4",
    }),
  description: z.string(),
  level: z.enum(LEVELS, { required_error: "Le niveau est obligatoire" }),
});

export type GameFormValues = z.infer<typeof gameFormSchema>;
