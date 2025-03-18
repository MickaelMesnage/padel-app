import { LEVELS } from "@/domain/user/user.constants";
import { z } from "zod";

export const profileFormSchema = z.object({
  nickname: z.string().min(1, "Le pseudo est obligatoire"),
  level: z.enum(LEVELS, { required_error: "Le niveau est obligatoire" }),
  acceptEmails: z.boolean(),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
