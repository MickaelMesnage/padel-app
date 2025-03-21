import { ActionButton } from "@/app/games/@modal/[gameId]/(.)delete/ActionButton";
import { CancelButton } from "@/app/games/@modal/[gameId]/(.)delete/CancelButton";
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
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
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
