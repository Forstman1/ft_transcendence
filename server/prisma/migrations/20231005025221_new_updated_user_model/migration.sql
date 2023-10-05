/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `coalitionUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hasTwoFA` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[intraID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "coalitionUrl",
DROP COLUMN "hasTwoFA",
ADD COLUMN     "avatarURL" TEXT,
ADD COLUMN     "coalitionURL" TEXT,
ADD COLUMN     "intraID" TEXT,
ADD COLUMN     "twoFaEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twoFaSecret" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_intraID_key" ON "User"("intraID");
