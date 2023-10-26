/*
  Warnings:

  - Added the required column `authorName` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "authorName" TEXT NOT NULL;
