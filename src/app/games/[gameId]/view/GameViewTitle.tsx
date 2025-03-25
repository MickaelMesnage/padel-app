import { Game } from "@/application/domain/game/game.entity";
import { UserEntity } from "@/application/domain/user/user.entity";
import Image from "next/image";

interface GameViewTitleProps {
  game: Game;
}

export const GameViewTitle = ({ game }: GameViewTitleProps) => {
  const { nickname } = new UserEntity(game.creator);

  return (
    <div className="flex items-start gap-4">
      <Image
        width={112}
        height={112}
        src="/images/user-avatar.png"
        alt={`${nickname} avatar`}
        title={`${nickname} avatar`}
        className="shrink-0 rounded-lg"
      />
      <div className="grow flex flex-col gap-2 items-start">
        <p className="text-xl md:text-2xl font-extrabold text-secondary">
          {nickname} organise ce match de padel
        </p>
        <div className="flex flex-col gap-4">
          {game.description && (
            <p className="text-sm font-medium text-body">{game.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
