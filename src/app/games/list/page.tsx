import { GameCard } from "@/components/organisms/game/GameCard/GameCard";
import { PATHS } from "@/PATHS";
import Link from "next/link";
import { getGames } from "@/application/usecases/game/getGames";

export default async function ListGamesPage() {
  const games = await getGames();

  return (
    <main className="pb-16">
      <div className="bg-primary-foreground">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-12">
          <h1 className="text-center text-secondary text-4xl font-bold">
            Liste des annonces
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 -mt-8">
        <div className="w-full flex flex-col gap-4">
          {games.map((game) => (
            <Link key={game.id} href={PATHS.games.view({ gameId: game.id })}>
              <GameCard game={game} className="hover:shadow-lg" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
