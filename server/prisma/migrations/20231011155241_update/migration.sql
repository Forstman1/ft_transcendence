-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_reciverID_fkey";

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_reciverID_fkey" FOREIGN KEY ("reciverID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
