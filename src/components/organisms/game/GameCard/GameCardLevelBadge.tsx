import { Level, levelMap } from "@/application/domain/constants/level.const";
import { Badge } from "@/components/ui/badge";

interface GameCardLevelBadgeProps {
  level: Level;
}

export const GameCardLevelBadge = ({ level }: GameCardLevelBadgeProps) => {
  return <Badge className="text-sm">Niveau {levelMap[level]}</Badge>;
};
