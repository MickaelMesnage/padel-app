import { GameViewActions } from "@/app/games/[gameId]/view/GameViewActions";
import { GameViewDetails } from "@/app/games/[gameId]/view/GameViewDetails";
import { GameViewParticipantsSection } from "@/app/games/[gameId]/view/GameViewParticipantsSection";
import { GameViewTitle } from "@/app/games/[gameId]/view/GameViewTitle";
import { getGameById } from "@/application/usecases/game/getGameById";
import { cn } from "@/lib/utils";

type Params = Promise<{ gameId: string }>;

export default async function ViewGamePage(props: { params: Params }) {
  const params = await props.params;
  const gameId = params.gameId;

  const game = await getGameById({ gameId });

  return (
    <main className="pb-16">
      <div className="bg-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 py-20">
          <GameViewTitle game={game} />
        </div>
      </div>
      <div
        className={cn(
          "container mx-auto max-w-3xl px-4 -mt-8",
          "flex flex-col gap-12"
        )}
      >
        <GameViewDetails game={game} />
        <GameViewParticipantsSection game={game} />
        <GameViewActions game={game} />
      </div>
    </main>
  );
}
