"use server";

import { profileFormSchema } from "@/components/organisms/profile/profile.schema";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { updateProfile } from "@/server/profile/updateProfile";
import { revalidatePath } from "next/cache";

export const updateProfileAction = authenticatedAction
  .schema(profileFormSchema)
  .action(async ({ parsedInput: data, ctx: { user } }) => {
    const profile = await updateProfile({ userId: user.id, data });

    revalidatePath("/");

    return profile;
  });
