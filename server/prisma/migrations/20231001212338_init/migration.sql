/*
  Warnings:

  - You are about to drop the column `authorId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `channelId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Message` table. All the data in the column will be lost.
  - Added the required column `authorID` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reciverID` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_channelId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "authorId",
DROP COLUMN "channelId",
DROP COLUMN "createdAt",
ADD COLUMN     "authorID" TEXT NOT NULL,
ADD COLUMN     "reciverID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_reciverID_fkey" FOREIGN KEY ("reciverID") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
