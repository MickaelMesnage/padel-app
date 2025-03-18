/*
  Warnings:

  - Added the required column `acceptEmails` to the `profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('ONE', 'TWO', 'THREE', 'THREE_PLUS', 'FOUR', 'FOUR_PLUS', 'FIVE', 'FIVE_PLUS', 'SIX', 'SIX_PLUS', 'SEVEN', 'EIGHT', 'NINE', 'TEN');

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "acceptEmails" BOOLEAN NOT NULL,
ADD COLUMN     "level" "Level" NOT NULL;
