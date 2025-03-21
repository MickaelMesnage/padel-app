import { GameCard } from "@/components/organisms/game/GameCard/GameCard";
import { PATHS } from "@/PATHS";
import Link from "next/link";
import { getGames } from "@/application/usecases/game/getGames";

export default async function ListGamesPage() {
  const games = await getGames();

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
