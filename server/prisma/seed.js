"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var client_1 = require("@prisma/client");
var argon2 = require("argon2");
var prisma = new client_1.PrismaClient();
var NUM_USERS = 10;
var NUM_CHANNELS = 5;
var NUM_CHANNEL_MEMBERS = 20;
var NUM_CHANNEL_MESSAGES = 50;
var NUM_USER_MESSAGES = 50;
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
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var numberOfUsers, password, numUser, i, users, channels, i, i, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    numberOfUsers = 2;
                    return [4 /*yield*/, argon2.hash('password')];
                case 1:
                    password = _a.sent();
                    numUser = 0;
                    _a.label = 2;
                case 2:
                    if (!(numUser < numberOfUsers)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: faker_1.faker.internet.userName(),
                                email: faker_1.faker.internet.email(),
                                fullname: faker_1.faker.internet.userName(),
                                avatar: faker_1.faker.image.avatar(),
                                accessToken: faker_1.faker.string.uuid(),
                                refreshToken: faker_1.faker.string.uuid(),
                                isOnline: faker_1.faker.datatype.boolean(),
                                hasTwoFA: faker_1.faker.datatype.boolean(),
                            },
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    numUser++;
                    return [3 /*break*/, 2];
                case 5:
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < NUM_CHANNELS)) return [3 /*break*/, 9];
                    return [4 /*yield*/, prisma.channel.create({
                            data: {
                                name: faker_1.faker.word.adjective(),
                                type: faker_1.faker.helpers.arrayElement(['PUBLIC', 'PRIVATE', 'PROTECTED']),
                            },
                        })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 6];
                case 9: return [4 /*yield*/, prisma.user.findMany()];
                case 10:
                    users = _a.sent();
                    return [4 /*yield*/, prisma.channel.findMany()];
                case 11:
                    channels = _a.sent();
                    i = 0;
                    _a.label = 12;
                case 12:
                    if (!(i < NUM_CHANNEL_MEMBERS)) return [3 /*break*/, 15];
                    return [4 /*yield*/, prisma.channelMember.create({
                            data: {
                                channelId: faker_1.faker.helpers.arrayElement(channels).id,
                                userId: faker_1.faker.helpers.arrayElement(users).id,
                                role: faker_1.faker.helpers.arrayElement(['ADMIN', 'OWNER', 'MEMBER']),
                            },
                        })];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    i++;
                    return [3 /*break*/, 12];
                case 15:
                    i = 0;
                    _a.label = 16;
                case 16:
                    if (!(i < NUM_CHANNEL_MESSAGES)) return [3 /*break*/, 19];
                    return [4 /*yield*/, prisma.channelMessage.create({
                            data: {
                                content: faker_1.faker.lorem.sentence(),
                                authorID: faker_1.faker.helpers.arrayElement(users).id,
                                reciverID: faker_1.faker.helpers.arrayElement(channels).id,
                                authorName: faker_1.faker.person.firstName(),
                            },
                        })];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    i++;
                    return [3 /*break*/, 16];
                case 19:
                    _loop_1 = function (i) {
                        var sender, receiver;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    sender = faker_1.faker.helpers.arrayElement(users);
                                    receiver = faker_1.faker.helpers.arrayElement(users.filter(function (user) { return user.id !== sender.id; }));
                                    return [4 /*yield*/, prisma.userMessage.create({
                                            data: {
                                                content: faker_1.faker.lorem.sentence(),
                                                authorID: sender.id,
                                                reciverID: receiver.id,
                                                authorName: sender.fullname,
                                            },
                                        })];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 20;
                case 20:
                    if (!(i < NUM_USER_MESSAGES)) return [3 /*break*/, 23];
                    return [5 /*yield**/, _loop_1(i)];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    i++;
                    return [3 /*break*/, 20];
                case 23: return [2 /*return*/];
            }
        });
    });
}
seedDatabase()
    .catch(function (error) {
    console.error('Error seeding database:', error);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var numberOfUsers, password, numUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    numberOfUsers = 2;
                    return [4 /*yield*/, argon2.hash('password')];
                case 1:
                    password = _a.sent();
                    numUser = 0;
                    _a.label = 2;
                case 2:
                    if (!(numUser < numberOfUsers)) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: faker_1.faker.internet.userName(),
                                email: faker_1.faker.internet.email(),
                                fullname: faker_1.faker.internet.userName(),
                                avatar: faker_1.faker.image.avatar(),
                                accessToken: faker_1.faker.string.uuid(),
                                refreshToken: faker_1.faker.string.uuid(),
                                isOnline: faker_1.faker.datatype.boolean(),
                                hasTwoFA: faker_1.faker.datatype.boolean(),
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
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    numUser++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('seeded successfully');
                    console.log("generated users");
                    return [2 /*return*/];
            }
        });
    });
}
seed()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
