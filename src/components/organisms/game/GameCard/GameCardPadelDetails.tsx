import { Game } from "@/application/domain/game/game.entity";
import { PadelComplexEntity } from "@/application/domain/padel-complex/padel-complex.entity";
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
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <MapIcon className="shrink-0 size-4 inline-block stroke-neutral-400" />
        <span>{game.padelComplex.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="shrink-0 size-4 inline-block stroke-neutral-400" />
        <span>{completeAddress}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="shrink-0 size-4 inline-block stroke-neutral-400" />
        <span>{formatDuration(game.durationInMinutes)}</span>
      </div>
    </div>
  );
};
