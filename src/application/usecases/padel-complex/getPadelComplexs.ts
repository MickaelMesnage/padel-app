import { PadelComplex } from "@/application/domain/padel-complex/padel-complex.entity";
import prisma from "@/lib/prisma/prisma";

export const getPadelComplexs = async (): Promise<PadelComplex[]> => {
  const padelComplexs = await prisma.padelComplex.findMany();

  return padelComplexs;
};
