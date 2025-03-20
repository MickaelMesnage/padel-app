import { Badge } from "@/components/ui/badge";

interface GameCardNbOfMissingPlayersBadgeProps {
  nbOfMissingPlayers: number;
}

const label = (nbOfMissingPlayers: number) => {
  if (nbOfMissingPlayers === 0) return "🎉  Complet";
  return `🧐  ${nbOfMissingPlayers} joueur(s) manquant(s)`;
};

export const GameCardNbOfMissingPlayersBadge = ({
  nbOfMissingPlayers,
}: GameCardNbOfMissingPlayersBadgeProps) => {
  return <Badge className="text-sm">{label(nbOfMissingPlayers)}</Badge>;
};
