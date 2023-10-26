/*
  Warnings:

  - You are about to drop the column `coalition` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "coalition",
ADD COLUMN     "coalitionColor" TEXT,
ADD COLUMN     "coalitionUrl" TEXT,
ALTER COLUMN "avatar" DROP NOT NULL;
