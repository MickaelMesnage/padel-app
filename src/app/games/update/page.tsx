import { GameUpdateFormContainer } from "@/app/games/update/GameUpdateFormContainer";
import { getGameIdFromQueryParams } from "@/app/games/update/getGameIdFromQueryParams";
import { GameEntity } from "@/application/domain/game/game.entity";
import { getGameById } from "@/application/usecases/game/getGameById";
import { getPadelComplexs } from "@/application/usecases/padel-complex/getPadelComplexs";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { SearchParams } from "@/utils/SearchParams.type";
import { unauthorized } from "next/navigation";

export default async function CreateGamePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { id: userId } = await getAuthenticatedUser();
  const gameId = await getGameIdFromQueryParams(searchParams);
  const game = await getGameById({ gameId });
  const { canUserUpdateGame } = new GameEntity(game);

  if (!canUserUpdateGame({ userId })) {
    unauthorized();
  }

  const padelComplexs = await getPadelComplexs();

  const defaultValues = {
    ...game,
    date: game.dateTime.toISOString().split("T")[0],
    time: game.dateTime.toISOString().split("T")[1].substring(0, 5),
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Modifier une partie</h1>
      <GameUpdateFormContainer
        defaultValues={defaultValues}
        gameId={gameId}
        padelComplexs={padelComplexs}
      />
    </main>
  );
}
