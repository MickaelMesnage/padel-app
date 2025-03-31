"use client";

import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { Badge } from "@/components/ui/badge";
import { authClient } from "@/lib/auth/auth-client";

interface GameCardCreatorBadgeProps {
  game: Game;
}

export const GameCardCreatorBadge = ({ game }: GameCardCreatorBadgeProps) => {
  const { data: session } = authClient.useSession();

  if (!session) return null;

  const gameEntity = new GameEntity(game);

  if (!gameEntity.isUserCreator({ userId: session.user.id })) return null;

  return <Badge className="text-sm">Organisé par moi</Badge>;
};
