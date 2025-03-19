import { SearchParams } from "@/utils/SearchParams.type";

export const getGameIdFromQueryParams = async (searchParams: SearchParams) => {
  const params = await searchParams;
  const gameId = params?.gameId;

  if (typeof gameId !== "string") {
    throw new Error("Query param gameId is required");
  }

  return gameId;
};
