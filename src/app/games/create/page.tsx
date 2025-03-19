import { GameCreateFormContainer } from "@/app/games/create/GameCreateFormContainer";

export default function CreateGamePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Créer une partie</h1>
      <GameCreateFormContainer />
    </main>
  );
}
