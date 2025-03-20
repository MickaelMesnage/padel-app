"use server";

import { updateUserProfile } from "@/application/usecases/user/updateUserProfile";
import { profileFormSchema } from "@/components/organisms/profile/profile.schema";
import { authenticatedAction } from "@/lib/action/safeActionClient";
import { revalidatePath } from "next/cache";

export const updateProfileAction = authenticatedAction
  .schema(profileFormSchema)
  .action(async ({ parsedInput: data, ctx: { user } }) => {
    const profile = await updateUserProfile({ userId: user.id, data });

    revalidatePath("/");

    return profile;
  });
