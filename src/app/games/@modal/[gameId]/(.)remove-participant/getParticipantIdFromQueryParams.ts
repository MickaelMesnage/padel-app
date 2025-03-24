import { SearchParams } from "@/utils/SearchParams.type";

export const getParticipantIdFromQueryParams = async (
  searchParams: SearchParams
) => {
  const params = await searchParams;
  const participantId = params?.participantId;

  if (typeof participantId !== "string") {
    throw new Error("Query param participantId is required");
  }

  return participantId;
};
