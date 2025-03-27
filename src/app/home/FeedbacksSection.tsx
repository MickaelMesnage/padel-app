import { getLastGameTheUserParticipatedIn } from "@/application/usecases/game/getLastGameTheUserParticipedIn";
import { getSession } from "@/lib/auth/getSession";

export const FeedbacksSection = async () => {
  const session = await getSession();

  if (!session) {
    return null;
  }

  const game = await getLastGameTheUserParticipatedIn({ userId: session.id });

  console.log({ game });

  return <span>feedbacks</span>;
};
