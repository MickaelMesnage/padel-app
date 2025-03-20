/*
  Warnings:

  - Added the required column `padelComplexId` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "padelComplexId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_padelComplexId_fkey" FOREIGN KEY ("padelComplexId") REFERENCES "PadelComplex"("id") ON DELETE CASCADE ON UPDATE CASCADE;
