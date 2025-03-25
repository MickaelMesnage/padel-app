import { GameCreateFormContainer } from "@/app/games/create/GameCreateFormContainer";
import { getPadelComplexs } from "@/application/usecases/padel-complex/getPadelComplexs";
import { Card, CardContent } from "@/components/ui/card";

export default async function CreateGamePage() {
  const padelComplexs = await getPadelComplexs();

  return (
    <main className="pb-16">
      <div className="bg-primary-foreground">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-12">
          <h1 className="text-center text-secondary text-4xl font-bold">
            Créer une nouvelle annonce
          </h1>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 -mt-8">
        <Card>
          <CardContent>
            <GameCreateFormContainer padelComplexs={padelComplexs} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
