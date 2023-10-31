/*
  Warnings:

  - Added the required column `userId` to the `ChannelMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChannelMember" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ChannelMember" ADD CONSTRAINT "ChannelMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
