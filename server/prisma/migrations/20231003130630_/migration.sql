/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "password" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Channel_name_key" ON "Channel"("name");
