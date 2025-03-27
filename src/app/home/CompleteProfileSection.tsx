import { UserEntity } from "@/application/domain/user/user.entity";
import { getUserById } from "@/application/usecases/user/getUserById";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth/getSession";
import { PATHS } from "@/PATHS";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const CompleteProfileSection = async () => {
  const session = await getSession();

  if (!session) {
    return null;
  }

  const user = await getUserById({ id: session.id });
  const userEntity = new UserEntity(user);

  if (userEntity.isProfileComplete()) {
    return null;
  }

  return (
    <Link href={PATHS.profile} passHref>
      <button className="w-full" type="button">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="grow flex flex-col items-start gap-2">
                <CardTitle>Compléter mon profil</CardTitle>
                <span className="text-sm text-muted-foreground text-start">
                  Profil complété à {userEntity.pourcentageComplete()}
                </span>
              </div>
              <ChevronRight />
            </div>
          </CardContent>
        </Card>
      </button>
    </Link>
  );
};
