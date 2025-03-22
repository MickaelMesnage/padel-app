import { Level, levelMap } from "@/application/domain/constants/level.const";

interface UserCardAvatarInterface {
  nickname: string;
  level: Level | undefined;
}

export const UserCardNicknameAndLevel = ({
  nickname,
  level,
}: UserCardAvatarInterface) => {
  return (
    <div className="grow min-w-0 flex flex-col gap-0">
      <span className="text-sm font-semibold text-neutral-700 truncate group-hover:underline">
        {nickname}
      </span>
      <span className="text-xs font-medium text-neutral-400 truncate">
        Niv. {level ? levelMap[level] : "Non défini"}
      </span>
    </div>
  );
};
