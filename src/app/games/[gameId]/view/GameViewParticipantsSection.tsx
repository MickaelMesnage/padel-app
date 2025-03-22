import { UserCardParticipant } from "@/app/games/[gameId]/view/UserCardParticipant";
import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { Card } from "@/components/ui/card";

interface GameViewParticipantsSectionProps {
  game: Game;
}

export const GameViewParticipantsSection = ({
  game,
}: GameViewParticipantsSectionProps) => {
  const gameEntity = new GameEntity(game);

  if (gameEntity.nbOfPlayers === 0) {
    return <div>Aucun participant pour le moment</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Les participants</h1>{" "}
      <Card className="w-full p-1 sm:p-1 gap-0 rounded-2xl">
        {game.participations.map((participant) => (
          <UserCardParticipant
            key={participant.user.id}
            user={participant.user}
            game={game}
          />
        ))}
      </Card>
    </div>
  );
};
