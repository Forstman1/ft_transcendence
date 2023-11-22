import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Room, MessageDto } from './dtos/user.dto';
import { Prisma, User } from '@prisma/client';


@Injectable()
export class UsersService {
  private rooms: Room[];
  constructor(private readonly prisma: PrismaService) {}

  //!------------------------User------------------------!//

  async getUser(id: Prisma.UserWhereUniqueInput): Promise<User | string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: id,
      });
      return user || 'User not found';
    } catch (error) {
      return `${error} could not find the user`;
    }
  }

  async getAllUsers(id: Prisma.UserWhereUniqueInput): Promise<User[] | string> {
    try {
      return await this.prisma.user.findMany({
        where: {
          NOT: {
            OR: [{ id: id.id }, { blocked: { some: { id: id.id } } }],
          },
        },
      });
    } catch (error) {
      return `${error} no Users found`;
    }
  }

  //!---------------FriendRequest------------------------!//

  async sendFriendRequest(
    User: Prisma.UserWhereUniqueInput,
    Friend: Prisma.UserWhereUniqueInput,
  ): Promise<User | string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: User.id,
        },
      });
      const friend = await this.prisma.user.findUnique({
        where: {
          id: Friend.id,
        },
      });
      const friendRequest = await this.prisma.friendRequest.findFirst({
        where: {
          OR: [
            {
              fromUserId: user.id,
              toUserId: friend.id,
            },
            {
              fromUserId: friend.id,
              toUserId: user.id,
            },
          ],
        },
      });
      if (friendRequest) return `Friend request already sent`;
      if (!user) {
        return 'User not found';
      }
      if (!friend) {
        return 'Friend not found';
      }

      await this.prisma.friendRequest.create({
        data: {
          fromUserId: user.id,
          toUserId: friend.id,
          status: 'pending',
        },
      });
      return user;
    } catch (error) {
      return `${error} could not send friend request`;
    }
  }

  async acceptFriendRequest(
    User: Prisma.UserWhereUniqueInput,
    Friend: Prisma.UserWhereUniqueInput,
  ): Promise<string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: User.id,
        },
      });
      const friend = await this.prisma.user.findUnique({
        where: {
          id: Friend.id,
        },
      });
      if (!user) {
        return 'User not found';
      }
      if (!friend) {
        return 'Friend not found';
      }
      await this.prisma.friendRequest.updateMany({
        where: {
          fromUserId: friend.id,
          toUserId: user.id,
          status: 'pending',
        },
        data: {
          status: 'accepted',
        },
      });

      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          friends: {
            connect: {
              id: friend.id,
            },
          },
        },
      });
      await this.prisma.user.update({
        where: { id: friend.id },
        data: {
          friends: {
            connect: {
              id: user.id,
            },
          },
        },
      });
      return `Friend request accepted`;
    } catch (error) {
      return `${error} could not accept friend request`;
    }
  }

  async declineFriendRequest(
    id: Prisma.UserWhereUniqueInput,
    friendId: Prisma.UserWhereUniqueInput,
  ): Promise<User | string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: id,
      });
      const friend = await this.prisma.user.findUnique({
        where: friendId,
      });
      if (!user) {
        return 'User not found';
      }
      if (!friend) {
        return 'Friend not found';
      }
      await this.prisma.friendRequest.updateMany({
        where: {
          fromUserId: friend.id,
          toUserId: user.id,
          status: 'pending',
        },
        data: {
          status: 'declined',
        },
      });
    } catch (error) {
      return `${error} could not decline friend request`;
    }
  }

  async removeFriend(
    id: Prisma.UserWhereUniqueInput,
    friendId: Prisma.UserWhereUniqueInput,
  ): Promise<string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: id,
      });
      const friend = await this.prisma.user.findUnique({
        where: friendId,
      });
      const friendRequest = await this.prisma.friendRequest.findFirst({
        where: {
          OR: [
            {
              fromUserId: user.id,
              toUserId: friend.id,
            },
            {
              fromUserId: friend.id,
              toUserId: user.id,
            },
          ],
        },
      });
      if (friendRequest) {
        await this.prisma.friendRequest.delete({
          where: {
            id: friendRequest.id,
          },
        });
      }
      if (!user) {
        return 'User not found';
      }
      if (!friend) {
        return 'Friend not found';
      }
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          friends: {
            disconnect: {
              id: friend.id,
            },
          },
        },
      });
      await this.prisma.user.update({
        where: { id: friend.id },
        data: {
          friends: {
            disconnect: {
              id: user.id,
            },
          },
        },
      });
      return `Friend removed`;
    } catch (error) {
      return `${error} could not remove friend`;
    }
  }

  //!---------------Block && UNBLOCK------------------------!//

  async blockUser(
    user: Prisma.UserWhereUniqueInput,
    friend: Prisma.UserWhereUniqueInput,
  ) {
    const User = await this.prisma.user.findUnique({
      where: user,
    });
    const Friend = await this.prisma.user.findUnique({
      where: friend,
    });
    if (!User) return `User not found`;
    if (!Friend) return `Friend not found`;
    try {
      await this.prisma.user.update({
        where: user,
        data: {
          blocked: {
            connect: {
              id: Friend.id,
            },
          },
        },
      });
    } catch (error) {
      return `${error} could not block user`;
    }
  }

  async unblockUser(
    user: Prisma.UserWhereUniqueInput,
    friend: Prisma.UserWhereUniqueInput,
  ) {
    const User = await this.prisma.user.findUnique({
      where: user,
    });
    const Friend = await this.prisma.user.findUnique({
      where: friend,
    });
    if (!User) return `User not found`;
    if (!Friend) return `Friend not found`;
    try {
      await this.prisma.user.update({
        where: user,
        data: {
          blocked: {
            disconnect: {
              id: Friend.id,
            },
          },
        },
      });
    } catch (error) {
      return `${error} could not unblock user`;
    }
  }

  //!---------------ListofFriend------------------------!//

  async UpdateFriendList(user: Prisma.UserWhereUniqueInput) {
    const friendRequests = await this.prisma.friendRequest.findMany({
      where: {
        OR: [
          {
            fromUserId: user.id,
            status: 'accepted',
          },
          {
            toUserId: user.id,
            status: 'accepted',
          },
        ],
      },
    });
    for (const friendRequest of friendRequests) {
      await this.prisma.user.update({
        where: { id: friendRequest.fromUserId },
        data: {
          friends: {
            connect: {
              id: friendRequest.toUserId,
            },
          },
        },
      });
      await this.prisma.user.update({
        where: { id: friendRequest.toUserId },
        data: {
          friends: {
            connect: {
              id: friendRequest.fromUserId,
            },
          },
        },
      });
    }
  }

  async listFriends(id: Prisma.UserWhereUniqueInput): Promise<User[] | string> {
    this.UpdateFriendList(id);
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: id.id,
        },
        include: {
          friends: true,
        },
      });
      if (!user) return 'User not found';
      const Blocked = await this.prisma.user.findUnique({
        where: {
          id: id.id,
        },
        include: {
          blockedBy: true,
        },
      });
      console.log('user.friends:', user.friends);
      console.log('Blocked.blockedBy:', Blocked.blockedBy);
      console.log('isBlocked: ', user.friends.includes(Blocked.blockedBy[0]));
      const friendsList = user.friends.filter((friend) => {
        return !Blocked.blockedBy.some(
          (blockedFriend) => blockedFriend.id === friend.id,
        );
      });
      return friendsList;
    } catch (error) {
      return `${error} could not retrieve friend list`;
    }
  }
  //!-------------------------ChatList---------------------------------!//

  async getChatList(
    User: Prisma.UserWhereUniqueInput,
  ): Promise<User[] | string> {
    try {
      const chatList = await this.prisma.user.findUnique({
        where: User,
        include: {
          chatWith: true,
        },
      });
      return chatList.chatWith;
    } catch (error) {
      return `${error} could not retrieve chat list`;
    }
  }

  async addToChat(
    User: Prisma.UserWhereUniqueInput,
    friendId: Prisma.UserWhereUniqueInput,
  ): Promise<string> {
    try {
      console.log(User.id, friendId.id);
      const user = await this.prisma.user.findUnique({
        where: { 
          id: User.id,
        },
      });
      const friend = await this.prisma.user.findUnique({
        where: {
          id: friendId.id,
        },
      });
      if (!user) {
        return 'User not found';
      }
      if (!friend) {
        return 'Friend not found';
      }
      await this.prisma.user.update({
        where: User,
        data: {
          chatWith: {
            connect: {
              id: friend.id,
            },
          },
        },
      });
      return `User added to chat list`;
    } catch (error) {
      return `${error} could not add to chat list`;
    }
  }

  async removeFromChat(
    User: Prisma.UserWhereUniqueInput,
    friendId: Prisma.UserWhereUniqueInput,
  ): Promise<string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: User.id,
        },
      });
      const friend = await this.prisma.user.findUnique({
        where: {
          id: friendId.id,
        },
      });
      if (!user) {
        return 'User not found';
      }
      if (!friend) {
        return 'Friend not found';
      }
      await this.prisma.user.update({
        where: User,
        data: {
          chatWith: {
            disconnect: {
              id: friend.id,
            },
          },
        },
      });
      return `User removed from chat list`;
    } catch (error) {
      return `${error} could not remove from chat list`;
    }
  }

  async isInChat(
    User: Prisma.UserWhereUniqueInput,
    friendId: Prisma.UserWhereUniqueInput,
  ): Promise<boolean> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: User.id,
        },
        include: {
          chatWith: true,
        },
      });
      const friend = await this.prisma.user.findUnique({
        where: {
          id: friendId.id,
        },
      });
      const isInChat = user.chatWith.some(
        (friend) => friend.id === friendId.id,
      );
      return isInChat;
    } catch (error) {
      return false;
    }
  }

  //!---------------Direct Message room------------------------!//

  async creatRoom(userId: string, reciverId: string): Promise<string | null> {
    try {
      const user1 = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      const user2 = await this.prisma.user.findUnique({
        where: {
          id: reciverId,
        },
      });
      if (!user1 || !user2) return null;
      const room = await this.prisma.dMRoom.create({
        data: {
          roomMembers: {
            connect: [{ id: user1.id }, { id: user2.id }],
          },
        },
      });
      return room.id;
    } catch (error) {
      return 'room created';
    }
  }

  async getRoom(userId: string, reciverId: string): Promise<string | null> {
    try {
      const user1 = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      const user2 = await this.prisma.user.findUnique({
        where: {
          id: reciverId,
        },
      });
      if (!user1 || !user2) return null;
      const room = await this.prisma.dMRoom.findFirst({
        where: {
          roomMembers: {
            every: {
              id: {
                in: [userId, reciverId],
              },
            },
          },
        },
      });
      if (!room) return null;
      return room.id;
    } catch (error) {
      return `${error} ${userId} ${reciverId} can't get room`;
    }
  }

  async getRooms(
    userId: Prisma.UserWhereUniqueInput,
  ): Promise<string[] | string> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId.id,
      },
    });
    if (!user) return `No such user`;
    try {
      const rooms = await this.prisma.dMRoom.findMany({
        where: {
          roomMembers: {
            some: {
              id: userId.id,
            },
          },
        },
        select: {
          id: true,
        },
      });
      const roomsId = rooms.map((room) => room.id);
      return roomsId;
    } catch (error) {
      return `can't get rooms`;
    }
  }

  //!---------------Message Storing------------------------!//

  async createMessage(messageInfo: MessageDto): Promise<string | MessageDto> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: messageInfo.authorName,
      },
    });
    if (!user) return `user Not found`;
    const reciver = await this.prisma.dMRoom.findUnique({
      where: {
        id: messageInfo.reciverID,
      },
    });
    if (!reciver) return `reciver Not found`;
    try {
      const message = await this.prisma.userMessage.create({
        data: {
          content: messageInfo.content,
          authorName: user.username,
          authorID: user.id,
          reciverID: reciver.id,
          createdAt: new Date(),
        },
      });
      return message;
    } catch (error) {
      return `${error} could not create message`;
    }
  }
  async getUserbyId(id: string){ 
    try {
        const getuser = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return getuser
    }
    catch(error){
        return error
    }
}

  async getuserstofound(tofound: string) {
    try {
      const getuserstofound = await this.prisma.user.findMany({
        where: {
          username: {
            contains: tofound,
          },
        },
      });
      return getuserstofound;
    } catch (error) {
      return error;
    }
  }

  notifyFriendRequest = async (userId: string, friendId: string): Promise<void> => {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
      },
    });
    const data = {
      title : "Friend Request",
      description: "You have a Friend Request from " + user.username,
      read: false,
    }
    await this.prisma.user.update({
      where: { id: friendId },
      data: {
        notifications: {
          create: {
            type: 'friendRequest',
            title: data.title,
            description: data.description,
            read: data.read,
          },
        },
      },
    });
    return;
  }
}
