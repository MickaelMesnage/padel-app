import { Badge } from "@/components/ui/badge";

interface GameCardIsCancelledBadgeProps {
  isCancelled: boolean;
}

export const GameCardIsCancelledBadge = ({
  isCancelled,
}: GameCardIsCancelledBadgeProps) => {
  if (!isCancelled) {
    return null;
  }

  return (
    <Badge className="text-lg" variant="destructive">
      Annonce annulée
    </Badge>
  );
};
