import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
async function Chat() {

  for (let userNum = 0; userNum < 10; userNum++) {
    
        await prisma.user.create({
            data: {
                username: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                message: {
                  create: {
                      content: faker.lorem.sentence(),
                  }
              }
            },
        });
    }
}
Chat()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
