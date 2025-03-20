import { Game } from "@/application/domain/game/game.entity";
import { PadelComplexEntity } from "@/application/domain/padel-complex/padel.entity";
import { Clock, MapIcon, MapPin } from "lucide-react";

const formatDuration = (durationInMinutes: number): string => {
  if (durationInMinutes < 60) {
    return `${durationInMinutes} minute${durationInMinutes > 1 ? "s" : ""}`;
  }

  const hours = Math.floor(durationInMinutes / 60);
  const remainingMinutes = durationInMinutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} heure${hours > 1 ? "s" : ""}`;
  }

  return `${hours} heure${hours > 1 ? "s" : ""} ${remainingMinutes} minute${
    remainingMinutes > 1 ? "s" : ""
  }`;
};

interface GameCardPadelComplexProps {
  game: Game;
}

export const GameCardPadelComplex = ({ game }: GameCardPadelComplexProps) => {
  const { completeAddress } = new PadelComplexEntity(game.padelComplex);

  return (
    <div className="flex flex-col">
      <span>
        <MapIcon className="size-4 mr-2 inline-block stroke-neutral-400" />
        <span>{game.padelComplex.name}</span>
      </span>
      <span>
        <MapPin className="size-4 mr-2 inline-block stroke-neutral-400" />
        <span>{completeAddress}</span>
      </span>
      <span>
        <Clock className="size-4 mr-2 inline-block stroke-neutral-400" />
        <span>{formatDuration(game.durationInMinutes)}</span>
      </span>
    </div>
  );
};
