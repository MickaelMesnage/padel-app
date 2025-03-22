import { UserCardNicknameAndLevel } from "@/components/organisms/user/UserCardNicknameAndLevel";
import { UserCardAvatar } from "@/components/organisms/user/UserCardAvatar";
import { twMerge } from "tailwind-merge";

export const UserCard = ({
  className,
  ...rest
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={twMerge("w-full p-2 flex items-center gap-2", className)}
      {...rest}
    />
  );
};

UserCard.Avatar = UserCardAvatar;
UserCard.NicknameAndLevel = UserCardNicknameAndLevel;
