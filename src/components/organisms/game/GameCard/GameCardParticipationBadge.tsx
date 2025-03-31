"use client";

import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { Badge } from "@/components/ui/badge";
import { authClient } from "@/lib/auth/auth-client";

interface GameCardParticipationBadgeProps {
  game: Game;
}

export const GameCardParticipationBadge = ({
  game,
}: GameCardParticipationBadgeProps) => {
  const { data: session } = authClient.useSession();

  if (!session) return null;

  const gameEntity = new GameEntity(game);

  if (!gameEntity.isUserParticipating({ userId: session.user.id })) return null;

  return <Badge className="text-sm">Je participe</Badge>;
};
