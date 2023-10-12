/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `coalition` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "coalition",
ADD COLUMN     "avatarURL" TEXT NOT NULL DEFAULT 'https://iintra.freekb.es/imgs/user.png',
ADD COLUMN     "coalitionColor" TEXT NOT NULL DEFAULT '#292d39',
ADD COLUMN     "coalitionURL" TEXT NOT NULL DEFAULT 'https://profile.intra.42.fr/assets/coalitions/factionless-05b8cd65bda8f5eaf56ecf1d16493f41908801cfd66aa97fb27c9611064f4f36.svg',
ADD COLUMN     "isOnline" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twoFactorSecret" TEXT;
