import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';
import * as argon2 from 'argon2';

async function seed() {
  const numberOfUsers = 5;
  const password = await argon2.hash('password');
  // create users
  for (let numUser = 0; numUser < numberOfUsers; numUser++) {
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        fullname: faker.internet.userName(),
        avatarURL: faker.image.avatar(),
      },
    });
  }
  console.log('seeded successfully');
  console.log(`generated users`);
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
