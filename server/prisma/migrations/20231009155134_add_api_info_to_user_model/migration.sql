/*
  Warnings:

  - You are about to drop the column `accessToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `coalition` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hasTwoFA` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "accessToken",
DROP COLUMN "avatar",
DROP COLUMN "coalition",
DROP COLUMN "hasTwoFA",
DROP COLUMN "refreshToken",
ADD COLUMN     "avatarURL" TEXT,
ADD COLUMN     "coalitionColor" TEXT,
ADD COLUMN     "coalitionURL" TEXT,
ADD COLUMN     "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twoFactorSecret" TEXT;
