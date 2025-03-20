import { getGameById } from "@/application/usecases/game/getGameById";
import { GameCard } from "@/components/organisms/game/GameCard/GameCard";

type Params = Promise<{ gameId: string }>;

export default async function ViewGamePage(props: { params: Params }) {
  const params = await props.params;
  const gameId = params.gameId;

  const game = await getGameById({ gameId });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Détails de la partie</h1>
      <GameCard game={game} />
    </main>
  );
}
