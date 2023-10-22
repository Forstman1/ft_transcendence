import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';
import * as argon2 from 'argon2';

// model GameHistory {
//   id        String   @id @default(uuid())
//   user      User     @relation(fields: [userId], references: [id])
//   userId    String
//   opponentId String
//   status    String
//   userScore Int
//   opponentScore Int
//   rounds    Int
//   matches   Int
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }


async function seed() {
  const numberOfUsers = 2;
  const password = await argon2.hash('password');
  // create users
  for (let numUser = 0; numUser < numberOfUsers; numUser++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password,
        games: {
          create: {
            status: 'win',
            opponentId: '1',
            userScore: 5,
            opponentScore: 3,
            rounds: 5,
            matches: 3,
          },
          }
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
