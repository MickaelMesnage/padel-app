import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { GameParticipantCard } from "@/components/organisms/game/GameParticipantCard/GameParticipantCard";

interface GameViewParticipantsProps {
  game: Game;
}

export const GameViewParticipants = ({ game }: GameViewParticipantsProps) => {
  const gameEntity = new GameEntity(game);

  if (gameEntity.nbOfPlayers === 0) {
    return <div>Aucun participant pour le moment</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Les participants</h1>
      <div className="flex flex-wrap gap-4 items-start">
        {game.participations.map((participant) => (
          <GameParticipantCard
            key={participant.user.id}
            user={participant.user}
          />
        ))}
      </div>
    </div>
  );
};
