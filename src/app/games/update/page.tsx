import { GameCreateFormContainer } from "@/app/games/create/GameCreateFormContainer";
import { getGameIdFromQueryParams } from "@/app/games/update/getGameIdFromQueryParams";
import { SearchParams } from "@/utils/SearchParams.type";

export default async function CreateGamePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const gameId = await getGameIdFromQueryParams(searchParams);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Modifier une partie</h1>
      <GameCreateFormContainer />
    </main>
  );
}
