"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
          <Button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Réessayer
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
