import { ProfileFormContainer } from "@/app/profile/ProfileFormContainer";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { getUserById } from "@/application/usecases/user/getUserById";

export default async function Page() {
  const { id: userId } = await getAuthenticatedUser();
  const user = await getUserById({ id: userId });

  const defaultValues = {
    nickname: user.profile?.nickname || "",
    acceptEmails: user.profile?.acceptEmails || true,
    level: user.profile?.level || "FIVE",
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Modifier mon profil</h1>
      <ProfileFormContainer defaultValues={defaultValues} />
    </main>
  );
}
