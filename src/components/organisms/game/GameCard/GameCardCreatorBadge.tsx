import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { Badge } from "@/components/ui/badge";
import { getSession } from "@/lib/auth/getSession";

interface GameCardCreatorBadgeProps {
  game: Game;
}

export const GameCardCreatorBadge = async ({
  game,
}: GameCardCreatorBadgeProps) => {
  const session = await getSession();
  if (!session) return null;

  const gameEntity = new GameEntity(game);

  if (!gameEntity.isUserCreator({ userId: session.id })) return null;

  return <Badge className="text-sm">Organisé par moi</Badge>;
};
