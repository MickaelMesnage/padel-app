import { ProfileFormContainer } from "@/app/profile/ProfileFormContainer";
import { UserEntity } from "@/domain/user/user.entity";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { getUserById } from "@/server/user/getUserById";

export default async function Page() {
  const { id: userId } = await getAuthenticatedUser();
  const user = await getUserById({ id: userId });
  const userEntity = new UserEntity(user);

  const profileFormDefaultValues = {
    nickname: userEntity.nickname,
    acceptEmails: userEntity.acceptEmails,
    level: userEntity.level,
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <ProfileFormContainer defaultValues={profileFormDefaultValues} />
    </main>
  );
}
