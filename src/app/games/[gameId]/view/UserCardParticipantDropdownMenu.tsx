"use client";

import { Game, GameEntity } from "@/application/domain/game/game.entity";
import { User } from "@/application/domain/user/user.entity";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth/auth-client";
import { PATHS } from "@/PATHS";
import { MoreVerticalIcon } from "lucide-react";
import Link from "next/link";

interface UserCardParticipantDropdownMenuProps {
  user: User;
  game: Game;
}

export const UserCardParticipantDropdownMenu = ({
  user,
  game,
}: UserCardParticipantDropdownMenuProps) => {
  const { data } = authClient.useSession();
  const gameEntity = new GameEntity(game);

  const canUserRemoveParticipant = data
    ? gameEntity.canUserRemoveParticipant({ userId: data.user.id })
    : false;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="shrink-0">
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <Link href={PATHS.public.profile({ userId: user.id })} passHref>
          <DropdownMenuItem>
            Voir le profil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        {canUserRemoveParticipant && (
          <Link
            href={PATHS.games.removeParticipant({
              gameId: game.id,
              participantId: user.id,
            })}
            passHref
          >
            <DropdownMenuItem>
              Supprimer la participation
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
