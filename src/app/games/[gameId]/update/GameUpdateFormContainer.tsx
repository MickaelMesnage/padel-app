"use client";

import { updateGameAction } from "@/app/games/[gameId]/update/updateGame.action";
import { Game } from "@/application/domain/game/game.entity";
import { PadelComplex } from "@/application/domain/padel-complex/padel-complex.entity";
import {
  gameFormSchema,
  GameFormValues,
} from "@/components/organisms/game/game.schema";
import { GameFormFields } from "@/components/organisms/game/gameFormFields";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/PATHS";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

interface GameUpdateFormContainerProps {
  game: Game;
  padelComplexs: PadelComplex[];
}

export const GameUpdateFormContainer = ({
  game,
  padelComplexs,
}: GameUpdateFormContainerProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const defaultValues = {
    ...game,
    date: game.dateTime
      .toLocaleDateString()
      .replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"),
    time: game.dateTime.toLocaleTimeString(),
  };

  const form = useForm<GameFormValues>({
    resolver: zodResolver(gameFormSchema),
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: GameFormValues) => {
    try {
      startTransition(async () => {
        const { date, time, ...rest } = data;
        const dateTime = new Date(`${date}T${time}`).toISOString();

        const res = await updateGameAction({
          ...rest,
          dateTime,
          gameId: game.id,
        });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Annonce modifée");
        router.push(PATHS.games.view({ gameId: game.id }));
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
      <FormProvider {...form}>
        <GameFormFields padelComplexs={padelComplexs} />
        <Button className="w-full" type="submit" disabled={pending}>
          <Plus className="mr-2 h-4 w-4" />
          Modifier
        </Button>
      </FormProvider>
    </form>
  );
};
