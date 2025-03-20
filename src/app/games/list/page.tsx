import { GameCard } from "@/components/organisms/game/GameCard/GameCard";
import { getUserGames } from "@/application/usecases/game/getUserGames";
import { getAuthenticatedUser } from "@/lib/auth/getAuthenticatedUser";
import { PATHS } from "@/PATHS";
import Link from "next/link";

export default async function ListGamesPage() {
  const { id: userId } = await getAuthenticatedUser();
  const games = await getUserGames({ userId });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Liste des annonces</h1>
      <div className="w-full flex flex-col gap-4">
        {games.map((game) => (
          <Link key={game.id} href={PATHS.games.view({ gameId: game.id })}>
            <GameCard game={game} className="hover:shadow-lg" />
          </Link>
        ))}
      </div>
    </main>
  );
}
