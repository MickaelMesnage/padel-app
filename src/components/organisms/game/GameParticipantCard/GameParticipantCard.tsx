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
      <CardContent>
        <div className="w-full flex flex-row gap-2">
          <Image
            width={48}
            height={48}
            src="/images/user-avatar.png"
            alt={`${nickname} avatar`}
            title={`${nickname} avatar`}
            className="rounded-lg size-12"
          />
          <div className="flex flex-col">
            <span className="grow truncate text-sm font-semibold text-primary">
              {nickname}
            </span>
            <span className="text-sm text-muted-foreground">
              Niv. {level ? levelMap[level] : "non défini"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
