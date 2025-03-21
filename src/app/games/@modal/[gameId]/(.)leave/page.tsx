import { ActionButton } from "@/app/games/@modal/[gameId]/(.)leave/ActionButton";
import { CancelButton } from "@/components/molecules/CancelButton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Params = Promise<{ gameId: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const gameId = params.gameId;

  return (
    <AlertDialog defaultOpen={true} open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Voulez-vous supprimer votre participation ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Attention, vous mettez fin à votre participation au match ! Cela
            peut être désagréable pour les autres participants.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <CancelButton />
          <ActionButton gameId={gameId} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
