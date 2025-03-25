"use client";

import { Game } from "@/application/domain/game/game.entity";

export type GameCardTitleTimeProps = {
  game: Game;
};

export const GameCardTitleTime = ({ game }: GameCardTitleTimeProps) => {
  const stringifiedStartDate = game.dateTime.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const stringifiedStartTime = game.dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex items-start gap-2">
      <span>🎾</span>
      <span className="text-primary-foreground text-lg font-bold first-letter:uppercase">
        {stringifiedStartDate} à {stringifiedStartTime}
      </span>
    </div>
  );
};
