import { Level } from "@/application/domain/constants/level.const";
import prisma from "@/lib/prisma/prisma";

export const updateUserProfile = async ({
  userId,
  data,
}: {
  userId: string;
  data: { nickname: string; level: Level; acceptEmails: boolean };
}) => {
  const profile = await prisma.profile.upsert({
    where: { userId },
    update: data,
    create: {
      userId,
      ...data,
    },
  });

  return profile;
};
