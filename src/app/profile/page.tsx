import { ProfileFormContainer } from "@/app/profile/ProfileFormContainer";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { getUserById } from "@/application/usecases/user/getUserById";
import { Card, CardContent } from "@/components/ui/card";

export default async function Page() {
  const { id: userId } = await getAuthenticatedUser();
  const user = await getUserById({ id: userId });

  const defaultValues = {
    nickname: user.profile?.nickname || "",
    acceptEmails: user.profile?.acceptEmails || true,
    level: user.profile?.level || "FIVE",
  };

  return (
    <main className="pb-16">
      <div className="bg-primary-foreground">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-12">
          <h1 className="text-center text-secondary text-4xl font-bold">
            Modifier mon profil
          </h1>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 -mt-8">
        <Card>
          <CardContent>
            <ProfileFormContainer defaultValues={defaultValues} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
