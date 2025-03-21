import { GameViewActions } from "@/app/games/[gameId]/view/GameViewActions";
import { GameViewDetails } from "@/app/games/[gameId]/view/GameViewDetails";
import { GameViewParticipants } from "@/app/games/[gameId]/view/GameViewParticipants";
import { getGameById } from "@/application/usecases/game/getGameById";

type Params = Promise<{ gameId: string }>;

export default async function ViewGamePage(props: { params: Params }) {
  const params = await props.params;
  const gameId = params.gameId;

  const game = await getGameById({ gameId });

  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-8">
      <GameViewDetails game={game} />
      <GameViewParticipants game={game} />
      <GameViewActions game={game} />
    </main>
  );
}
