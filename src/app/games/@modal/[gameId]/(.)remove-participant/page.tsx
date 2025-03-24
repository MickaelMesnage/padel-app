import { ActionButton } from "@/app/games/@modal/[gameId]/(.)remove-participant/ActionButton";
import { getParticipantIdFromQueryParams } from "@/app/games/@modal/[gameId]/(.)remove-participant/getParticipantIdFromQueryParams";
import { CancelButton } from "@/components/molecules/CancelButton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { SearchParams } from "@/utils/SearchParams.type";

type Params = Promise<{ gameId: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  console.log("je suis la");
  const params = await props.params;
  const gameId = params.gameId;

  const participantId = await getParticipantIdFromQueryParams(
    props.searchParams
  );

  return (
    <AlertDialog defaultOpen={true} open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Voulez-vous supprimer la participation de ce participant ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Attention, vous supprimez la participation de ce participant. Cela
            peut être désagréable pour lui.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <CancelButton />
          <ActionButton gameId={gameId} participantId={participantId} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
