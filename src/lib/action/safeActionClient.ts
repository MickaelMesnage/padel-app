import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();

export const action = actionClient;

export const authenticatedAction = actionClient.use(async ({ next }) => {
  const user = await getAuthenticatedUser();
  return next({ ctx: { user } });
});
