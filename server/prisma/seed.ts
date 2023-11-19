import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

const NUM_USERS = 10;
const NUM_CHANNELS = 5;
const NUM_CHANNEL_MEMBERS = 20;
const NUM_CHANNEL_MESSAGES = 50;
const NUM_USER_MESSAGES = 50;
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

// async function seedDatabase() {
//   const numberOfUsers = 2;
//   const password = await argon2.hash('password');

//   const Users = [];

//   for (let numUser = 0; numUser < numberOfUsers; numUser++) {
//     const user = await prisma.user.create({
//       data: {
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         fullname: faker.internet.userName(),
//         avatarURL: faker.image.avatar(),
//         // accessToken: faker.string.uuid(),
//         // refreshToken: faker.string.uuid(),
//         isOnline: faker.datatype.boolean(),
//         hasTwoFA: faker.datatype.boolean(),
//       },
//     });
//     Users.push({ user });
//   }

//   const [user1, user2] = Users;

//   await prisma.friendRequest.create({
//     data: {
//       fromUserId: `bf248c9f-f118-435f-8760-a82a779e719c`,
//       toUserId: `1da63ba9-7bb7-4d49-86a9-db17bbec6c49`,
//       status: 'accepted', // You can set it to 'pending' and handle acceptance in your application
//     },
//   });
//   await prisma.friendRequest.create({
//     data: {
//       fromUserId: `35d28769-f637-470e-a273-9192432d2d84`,
//       toUserId: `1da63ba9-7bb7-4d49-86a9-db17bbec6c49`,
//       status: 'accepted', // You can set it to 'pending' and handle acceptance in your application
//     },
//   });
//   await prisma.friendRequest.create({
//     data: {
//       fromUserId: `438ebf29-52db-4645-877f-f8ef53d51eb4`,
//       toUserId: `1da63ba9-7bb7-4d49-86a9-db17bbec6c49`,
//       status: 'accepted', // You can set it to 'pending' and handle acceptance in your application
//     },
//   });
//   await prisma.friendRequest.create({
//     data: {
//       fromUserId: `9f01e93f-d751-4efb-b8b6-e8cac3ca05a2`,
//       toUserId: `1da63ba9-7bb7-4d49-86a9-db17bbec6c49`,
//       status: 'accepted', // You can set it to 'pending' and handle acceptance in your application
//     },
//   });

//   // User2 sends a friend request to user1

//   // Create fake channels
//   for (let i = 0; i < NUM_CHANNELS; i++) {
//     await prisma.channel.create({
//       data: {
//         name: faker.word.adjective(),
//         type: faker.helpers.arrayElement(['PUBLIC', 'PRIVATE', 'PROTECTED']),
//       },
//     });
//   }

//   // Create fake channel members
//   const users = await prisma.user.findMany();
//   const channels = await prisma.channel.findMany();
//   for (let i = 0; i < NUM_CHANNEL_MEMBERS; i++) {
//     await prisma.channelMember.create({
//       data: {
//         channelId: faker.helpers.arrayElement(channels).id,
//         userId: faker.helpers.arrayElement(users).id,
//         role: faker.helpers.arrayElement(['ADMIN', 'OWNER', 'MEMBER']),
//       },
//     });
//   }

//   // Create fake channel messages
//   for (let i = 0; i < NUM_CHANNEL_MESSAGES; i++) {
//     await prisma.channelMessage.create({
//       data: {
//         content: faker.lorem.sentence(),
//         authorID: faker.helpers.arrayElement(users).id,
//         reciverID: faker.helpers.arrayElement(channels).id,
//         authorName: faker.person.firstName(),
//       },
//     });
//   }

//   // Create fake user messages
//   for (let i = 0; i < NUM_USER_MESSAGES; i++) {
//     const sender = faker.helpers.arrayElement(users);
//     const receiver = faker.helpers.arrayElement(
//       users.filter((user) => user.id !== sender.id),
//     );
//     await prisma.userMessage.create({
//       data: {
//         content: faker.lorem.sentence(),
//         authorID: sender.id,
//         reciverID: receiver.id,
//         authorName: sender.fullname,
//       },
//     });
//   }
// }

// seedDatabase()
//   .catch((error) => {
//     console.error('Error seeding database:', error);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

async function seed() {
  const numberOfUsers = 2;
  const password = await argon2.hash('password');
  // create users
  for (let numUser = 0; numUser < numberOfUsers; numUser++) {
    await prisma.user.create({
      data: {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        fullname: faker.internet.userName(),
        avatarURL: faker.image.avatar(),
        // accessToken: faker.string.uuid(),
        // refreshToken: faker.string.uuid(),
        isOnline: faker.datatype.boolean(),
        hasTwoFA: faker.datatype.boolean(),
        // games: {
        //   create: {
        //     status: 'win',
        //     opponentId: '1',
        //     userScore: 5,
        //     opponentScore: 3,
        //     rounds: 5,
        //     matches: 3,
        //   },
        //   }
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
