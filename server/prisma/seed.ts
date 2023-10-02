import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';

async function seed() {
  const numberOfUsers = 5;
  // create users
  for (let numUser = 0; numUser < numberOfUsers; numUser++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        fullname: faker.internet.displayName(),
        avatar: faker.internet.avatar(),
        coalitionUrl: faker.internet.avatar(),
        coalitionColor: faker.internet.userName(),
        accessToken: faker.internet.password(),
        refreshToken: faker.internet.password(),
      },
    });
  }
  console.log('seeded successfully');
  console.log(`generated users`);
}
// seed()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
