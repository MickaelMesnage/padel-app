import { Level, levelMap } from "@/application/domain/constants/level.const";
import { User, UserEntity } from "@/application/domain/user/user.entity";
import Image from "next/image";

interface GameCardCreatorProps {
  creator: User;
}

const label = ({
  nickname,
  level,
}: {
  nickname: string;
  level: Level | undefined;
}) => {
  if (level) {
    return `${nickname} - Niv. ${levelMap[level]}`;
  }
  return `Organisé par${nickname} - Niv. non défini`;
};

export const GameCardCreator = ({ creator }: GameCardCreatorProps) => {
  const { nickname, level } = new UserEntity(creator);

  return (
    <div className="grow min-w-0 flex items-center gap-2">
      <Image
        width={28}
        height={28}
        src="/images/user-avatar.png"
        alt={`${nickname} avatar`}
        title={`${nickname} avatar`}
        className="shrink-0 rounded-lg"
      />
      <span className="grow truncate text-sm font-semibold text-primary">
        {label({ nickname, level })}
      </span>
    </div>
  );
};
