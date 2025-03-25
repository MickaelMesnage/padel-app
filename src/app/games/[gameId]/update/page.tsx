import { GameUpdateFormContainer } from "@/app/games/[gameId]/update/GameUpdateFormContainer";
import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
import { getPadelComplexs } from "@/application/usecases/padel-complex/getPadelComplexs";
import { Card, CardContent } from "@/components/ui/card";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { unauthorized } from "next/navigation";

type Params = Promise<{ gameId: string }>;

export default async function UpdateGamePage(props: { params: Params }) {
  const params = await props.params;
  const gameId = params.gameId;

  const { id: userId } = await getAuthenticatedUser();
  const game = await getGameById({ gameId });
  const gameEntity = new GameEntity(game);

  if (!gameEntity.canUserUpdateGame({ userId })) {
    unauthorized();
  }

  const padelComplexs = await getPadelComplexs();

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
        <Card>
          <CardContent>
            <GameUpdateFormContainer
              game={game}
              padelComplexs={padelComplexs}
            />{" "}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
