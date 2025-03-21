import { ActionButton } from "@/app/games/@modal/[gameId]/(.)delete/ActionButton";
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
            Voulez-vous supprimer cette annonce ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Cette action est irréversible.
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
