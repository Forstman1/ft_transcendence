-- DropForeignKey
ALTER TABLE "UserMessage" DROP CONSTRAINT "UserMessage_authorID_fkey";

-- DropForeignKey
ALTER TABLE "UserMessage" DROP CONSTRAINT "UserMessage_reciverID_fkey";

-- AddForeignKey
ALTER TABLE "UserMessage" ADD CONSTRAINT "UserMessage_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMessage" ADD CONSTRAINT "UserMessage_reciverID_fkey" FOREIGN KEY ("reciverID") REFERENCES "DMRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
