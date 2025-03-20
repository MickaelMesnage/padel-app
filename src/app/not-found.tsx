import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PATHS } from "@/PATHS";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-8">
          <Image
            src="/images/man-cartwheeling.webp"
            alt="Man cartwheeling"
            width={100}
            height={100}
          />
          <p className="text-base font-medium text-primary text-center">
            Quelque chose n&apos;a pas fonctionné comme prévu.
            <br />
            En attendant, tu peux essayer de rafraîchir la page, ou réessayer
            plus tard.
          </p>
          <Link href={PATHS.home} passHref>
            <Button>Retour à la page d&apos;accueil</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
