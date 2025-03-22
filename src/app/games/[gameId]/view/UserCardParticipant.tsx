import { UserCardParticipantDropdownMenu } from "@/app/games/[gameId]/view/UserCardParticipantDropdownMenu";
import { Game } from "@/application/domain/game/game.entity";
import { User, UserEntity } from "@/application/domain/user/user.entity";
import { UserCard } from "@/components/organisms/user/UserCard";

interface UserCardParticipantParticipant {
  user: User;
  game: Game;
}

export const UserCardParticipant = ({
  user,
  game,
}: UserCardParticipantParticipant) => {
  const { nickname, level } = new UserEntity(user);

  return (
    <UserCard>
      <UserCard.Avatar nickname={nickname} />
      <UserCard.NicknameAndLevel nickname={nickname} level={level} />
      <UserCardParticipantDropdownMenu user={user} game={game} />
    </UserCard>
  );
};
