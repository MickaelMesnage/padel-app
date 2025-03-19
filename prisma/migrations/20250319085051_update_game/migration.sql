/*
  Warnings:

  - You are about to drop the column `date` on the `Game` table. All the data in the column will be lost.
  - Added the required column `dateTime` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "date",
ADD COLUMN     "dateTime" TIMESTAMP(3) NOT NULL;
