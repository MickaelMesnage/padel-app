import Image from "next/image";

interface UserCardAvatarInterface {
  nickname: string;
  avatarSrc?: string;
}

export const UserCardAvatar = ({
  nickname,
  avatarSrc,
}: UserCardAvatarInterface) => {
  return (
    <Image
      src={avatarSrc || "/images/user-avatar.png"}
      width={40}
      height={40}
      className="rounded-lg shrink-0"
      alt={`${nickname} avatar`}
    />
  );
};
