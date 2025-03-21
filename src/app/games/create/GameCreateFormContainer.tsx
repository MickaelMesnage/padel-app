"use client";

import { createGameAction } from "@/app/games/create/createGame.action";
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

interface GameCreateFormContainerProps {
  padelComplexs: { id: string; name: string }[];
}

export const GameCreateFormContainer = ({
  padelComplexs,
}: GameCreateFormContainerProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<GameFormValues>({
    resolver: zodResolver(gameFormSchema),
    defaultValues: {
      padelComplexId: "",
      description: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: GameFormValues) => {
    try {
      startTransition(async () => {
        const { date, time, ...rest } = data;
        const dateTime = new Date(`${date}T${time}`).toISOString();

        const res = await createGameAction({ ...rest, dateTime });

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Annonce créée");
        router.push(PATHS.games.list);
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
          Créer
        </Button>
      </FormProvider>
    </form>
  );
};
