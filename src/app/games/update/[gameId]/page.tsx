import { GameUpdateFormContainer } from "@/app/games/update/[gameId]/GameUpdateFormContainer";
import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
import { getPadelComplexs } from "@/application/usecases/padel-complex/getPadelComplexs";
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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Modifier une annonce</h1>
      <GameUpdateFormContainer game={game} padelComplexs={padelComplexs} />
    </main>
  );
}
