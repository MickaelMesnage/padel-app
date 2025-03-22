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
import { getSession } from "@/lib/auth/getSession";
import { MoreVerticalIcon } from "lucide-react";

interface UserCardParticipantDropdownMenuProps {
  user: User;
  game: Game;
}

export const UserCardParticipantDropdownMenu = async ({
  user,
  game,
}: UserCardParticipantDropdownMenuProps) => {
  const { data: session } = useSession();
  // const session = await getSession();
  const gameEntity = new GameEntity(game);

  const canUserRemoveParticipant = session
    ? gameEntity.canUserRemoveParticipant({ userId: session.id })
    : false;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="shrink-0">
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem>
          Voir le profil
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        {canUserRemoveParticipant && (
          <DropdownMenuItem>
            Supprimer la participation
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
