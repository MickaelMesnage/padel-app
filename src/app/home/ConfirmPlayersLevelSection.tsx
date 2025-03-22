import { getLastGameTheUserParticipatedIn } from "@/application/usecases/game/getLastGameTheUserParticipedIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSession } from "@/lib/auth/getSession";
import { PATHS } from "@/PATHS";
import Image from "next/image";
import Link from "next/link";

export const CompleteProfileSection = async () => {
  const session = await getSession();

  if (!session || !session.id) {
    return null;
  }

  const lastGame = await getLastGameTheUserParticipatedIn({
    userId: session.id,
  });

  if (!lastGame) {
    return null;
  }

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/images/man-cartwheeling.webp"
          alt="Man cartwheeling"
          width={100}
          height={100}
        />
        <p className="max-w-md text-center">
          Donne nous quelques informations sur toi qui peuvent nous aider à
          mieux te connaitre
        </p>
        <Link href={PATHS.profile} passHref>
          <Button>Compléter mon profil</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
