import { Level } from "@/domain/user/user.constants";
import prisma from "@/lib/prisma/prisma";

export const updateProfile = async ({
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
