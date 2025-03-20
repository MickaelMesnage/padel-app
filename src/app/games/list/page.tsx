import { GameCard } from "@/components/organisms/game/GameCard/GameCard";
import { getUserGames } from "@/application/usecases/game/getUserGames";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";

export default async function ListGamesPage() {
  const { id: userId } = await getAuthenticatedUser();
  const games = await getUserGames({ userId });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Mes parties</h1>
      <div className="w-full flex flex-col gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
