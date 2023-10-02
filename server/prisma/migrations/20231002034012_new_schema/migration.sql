/*
  Warnings:

  - Added the required column `accessToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refreshToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `avatar` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `coalition` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "hasTwoFA" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOnline" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "refreshToken" TEXT NOT NULL,
ALTER COLUMN "avatar" SET NOT NULL,
ALTER COLUMN "coalition" SET NOT NULL;
