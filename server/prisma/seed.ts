import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';

async function seed() {
  const numberOfUser = 5;
  // create user
  for (let numUser = 0; numUser < numberOfUser; numUser++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        fullname: faker.internet.displayName(),
      },
    });
  }
  console.log('seeded successfully');
  console.log(`generated user`);
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
