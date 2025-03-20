import prisma from "@/lib/prisma/prisma";

export const getUserById = async ({ id }: { id: string }) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });

  return user;
};
