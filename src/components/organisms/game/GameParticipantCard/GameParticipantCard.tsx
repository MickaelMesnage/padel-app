import { Card, CardContent } from "@/components/ui/card";
import { User, UserEntity } from "@/application/domain/user/user.entity";
import Image from "next/image";
import { levelMap } from "@/application/domain/constants/level.const";

interface GameParticipantCardProps {
  user: User;
  className?: React.ComponentProps<"div">["className"];
}

export const GameParticipantCard = ({
  user,
  className,
}: GameParticipantCardProps) => {
  const { nickname, level } = new UserEntity(user);

  return (
    <Card className={className}>
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Image
            width={28}
            height={28}
            src="/images/user-avatar.png"
            alt={`${nickname} avatar`}
            title={`${nickname} avatar`}
            className="shrink-0 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="grow truncate text-sm font-semibold text-primary">
            {nickname}
          </span>
          <span className="text-sm text-muted-foreground">
            Niv. {level ? levelMap[level] : "non défini"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
