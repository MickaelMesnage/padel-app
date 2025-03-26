import { GameUpdateFormSection } from "@/app/games/[gameId]/update/GameUpdateFormSection";
import { Loading } from "@/components/molecules/Loading";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";

type Params = Promise<{ gameId: string }>;

export default async function UpdateGamePage(props: { params: Params }) {
  const params = await props.params;
  const gameId = params.gameId;

  return (
    <main className="pb-16">
      <div className="bg-primary-foreground">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-12">
          <h1 className="text-center text-secondary text-4xl font-bold">
            Modifier une annonce
          </h1>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 -mt-8">
        <Suspense fallback={<Loading />}>
          <Card>
            <CardContent>
              <GameUpdateFormSection gameId={gameId} />
            </CardContent>
          </Card>
        </Suspense>
      </div>
    </main>
  );
}
