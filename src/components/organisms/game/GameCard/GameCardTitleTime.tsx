"use client";

import { Game } from "@/application/domain/game/game.entity";

export type GameCardTitleTimeProps = {
  game: Game;
};

export const GameCardTitleTime = ({ game }: GameCardTitleTimeProps) => {
  const stringifiedStartDate = game.dateTime.toLocaleDateString([], {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const stringifiedStartTime = game.dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const label = `🎾 Match • ${stringifiedStartDate} à ${stringifiedStartTime}`;

  return <span className="text-lg text-primary">{label}</span>;
};
