"use client";

import { Game, GameEntity } from "@/application/domain/game/game.entity";
import Link from "next/link";
import { PATHS } from "@/PATHS";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleXIcon,
  MoreVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";

interface GameViewDetailsActionsProps {
  game: Game;
}

export const GameViewDetailsActions = ({
  game,
}: GameViewDetailsActionsProps) => {
  const gameEntity = new GameEntity(game);
  const { data } = authClient.useSession();

  const user = data?.user;

  const userCanUpdateGame = user
    ? gameEntity.canUserUpdateGame({ userId: user.id })
    : false;

  const userCanDeleteGame = user
    ? gameEntity.canUserDeleteGame({ userId: user.id })
    : false;

  const userCanCancelGame = user
    ? gameEntity.canUserCancelGame({ userId: user.id })
    : false;

  if (!userCanUpdateGame && !userCanDeleteGame && !userCanCancelGame) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="shrink-0">
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        {userCanCancelGame && (
          <Link href={PATHS.games.cancel({ gameId: game.id })} passHref>
            <DropdownMenuItem>
              <CircleXIcon className="size-4" />
              Annuler le match
            </DropdownMenuItem>
          </Link>
        )}
        {userCanDeleteGame && (
          <Link href={PATHS.games.delete({ gameId: game.id })} passHref>
            <DropdownMenuItem>
              <TrashIcon className="size-4" />
              Supprimer le match
            </DropdownMenuItem>
          </Link>
        )}
        {userCanUpdateGame && (
          <Link href={PATHS.games.update({ gameId: game.id })} passHref>
            <DropdownMenuItem>
              <PencilIcon className="size-4" />
              Modifier le match
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
