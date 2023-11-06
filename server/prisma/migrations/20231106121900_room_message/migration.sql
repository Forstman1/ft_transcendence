/*
  Warnings:

  - You are about to drop the column `roomID` on the `UserMessage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserMessage" DROP CONSTRAINT "UserMessage_reciverID_fkey";

-- DropIndex
DROP INDEX "UserMessage_roomID_key";

-- AlterTable
ALTER TABLE "UserMessage" DROP COLUMN "roomID";

-- CreateTable
CREATE TABLE "DMRoom" (
    "id" TEXT NOT NULL,

    CONSTRAINT "DMRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Friends" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Chate" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_rooms" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Friends_AB_unique" ON "_Friends"("A", "B");

-- CreateIndex
CREATE INDEX "_Friends_B_index" ON "_Friends"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Chate_AB_unique" ON "_Chate"("A", "B");

-- CreateIndex
CREATE INDEX "_Chate_B_index" ON "_Chate"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_rooms_AB_unique" ON "_rooms"("A", "B");

-- CreateIndex
CREATE INDEX "_rooms_B_index" ON "_rooms"("B");

-- AddForeignKey
ALTER TABLE "UserMessage" ADD CONSTRAINT "UserMessage_reciverID_fkey" FOREIGN KEY ("reciverID") REFERENCES "DMRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Friends" ADD CONSTRAINT "_Friends_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Friends" ADD CONSTRAINT "_Friends_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Chate" ADD CONSTRAINT "_Chate_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Chate" ADD CONSTRAINT "_Chate_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rooms" ADD CONSTRAINT "_rooms_A_fkey" FOREIGN KEY ("A") REFERENCES "DMRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rooms" ADD CONSTRAINT "_rooms_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
