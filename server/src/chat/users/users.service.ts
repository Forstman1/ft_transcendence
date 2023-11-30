import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Room, MessageDto, user } from './dtos/user.dto';
import { Prisma, User } from '@prisma/client';



@Injectable()
export class UsersService {
  private rooms: Room[];
  constructor(private readonly prisma: PrismaService) {}

  //!------------------------User------------------------!//

  async getUser(id: Prisma.UserWhereUniqueInput): Promise<user | string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: id,
        select:{
          id: true,
          username: true,      
          email:    true,      
          fullname: true,       
          avatarURL:   true,
          isOnline: true,
        }
      });
      return user;
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
      return [];
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
          status: 'Pending',
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
          status: 'Pending',
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

  async getAcceptedFriendRequests(
    id: Prisma.UserWhereUniqueInput,
  ): Promise<User[] | string> {
    try {
      const user = await this.prisma.user.findUnique({
        where: id,
      });
      if (!user) {
        return 'User not found';
      }
      const friendRequests = await this.prisma.friendRequest.findMany({
        where: {
          OR: [
            {
              fromUserId: user.id,
              status: 'accepted',
            },
          ],
        },
        include: {
          toUser: true,
        },
      });

      const alreadyFriends = await this.prisma.user.findMany({
        where: {
          friends: {
            some: {
              id: user.id,
            },
          },
        },
      });
      const friends = friendRequests.map(
        (friendRequest) => friendRequest.toUser,
      );
      const respondedFriends = friends.filter((friend) => {
        return !alreadyFriends.some(
          (alreadyFriend) => alreadyFriend.id === friend.id,
        );
      });
      return respondedFriends;
    } catch (error) {
      return [];
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
      console.log(user.id, friend.id);
     const  friendRequest = await this.prisma.friendRequest.findFirst({
        where: {
          fromUserId: friend.id,
          toUserId: user.id,
          status: 'Pending',
        },
      })
     
      await this.prisma.friendRequest.delete({
        where: {
          id: friendRequest.id, 
          fromUserId: friend.id,
          toUserId: user.id,
          status: 'Pending',
        }
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



  async checkIfBlocked(
    user: Prisma.UserWhereUniqueInput,
    friend: Prisma.UserWhereUniqueInput,
  ): Promise<boolean> {
    const User = await this.prisma.user.findUnique({
      where: user,
    });
    const Friend = await this.prisma.user.findUnique({
      where: friend,
    });
    if (!User) return false;
    if (!Friend) return false;
    try {
      const isBlocked = await this.prisma.user.findUnique({
        where: user,
        include: {
          blocked: {
            where: {
              id: Friend.id,
            },
          },
          blockedBy:{
            where:{
              id: Friend.id,
            }
          }
        },
      });
      
      return isBlocked.blocked.length || isBlocked.blockedBy.length ? true : false;
    } catch (error) {
      return false;
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
  ): Promise<user[] | string> {
    try {
      const chatList = await this.prisma.user.findUnique({
        where: User,
        include: {
          chatWith: {
            select: {
              id: true,
              username: true,      
              email:    true,      
              fullname: true,       
              avatarURL:   true,
              isOnline: true,
            },
          }
        },
      });
      return chatList.chatWith;
    } catch (error) {
      return [];
    }
  }

  async addToChat(
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
        include: {
          roomMembers: true,
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
        include: {
          roomMembers: true,
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
              id: user.id,
            },
          },
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
      include: {
        roomMembers: true,
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
          reciverName: messageInfo.reciverName,
        },
      });

      return message;
    } catch (error) {
      return `${error} could not create message`;
    }
  }
  async getUserbyId(id: string) {
    try {
      const getuser = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return getuser;
    } catch (error) {
      return error;
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

  notifyFriendRequest = async (
    userId: string,
    friendId: string,
  ): Promise<void> => {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
      },
    });
    const data = {
      title: 'Friend Request',
      description: 'You have a Friend Request from ' + user.username,
      read: false,
    };
    await this.prisma.user.update({
      where: { id: friendId },
      data: {
        notifications: {
          create: {
            type: 'friendRequest',
            title: data.title,
            description: data.description,
            read: data.read,
            senderId: userId,
          },
        },
      },
    });
    return;
  };

  removeNotification = async (
    userId: string,
    friendId: string,
  ): Promise<void> => {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        notifications: {
          deleteMany: {
            senderId: friendId,
            type: 'friendRequest',
          },
        },
      },
    });
    return;
  };

  getNotifications = async (userId: string): Promise<any> => {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        notifications: true,
      },
    });
    return user.notifications;
  };

  readNotification = async (notificationId: string): Promise<void> => {
    await this.prisma.notification.update({
      where: { id: notificationId },
      data: {
        read: true,
      },
    });
    return;
  };

  //!------------------------Friendship Status------------------------!//

  async AskFriendshipStatus(
    User: Prisma.UserWhereUniqueInput,
    Friend: Prisma.UserWhereUniqueInput,
  ): Promise<string[]> {
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
      const Blockingstatus = await this.prisma.user.findUnique({
        where: {
          id: User.id,
        },
        include: {
          blocked: {
            where: {
              id: Friend.id,
            },
          },
        },    
      });
      if(friendRequest){
        friendRequest.status = friendRequest.status === 'Pending' && friendRequest.toUserId === user.id ? 'accept' : friendRequest.status;
      }
      let name = friend ? friend.username : 'User not found';
      const alt1 = friendRequest ? friendRequest.status : 'Add to friend list';
      const alt2 = Blockingstatus.blocked.length ? 'Unblock' : 'Block';
      const status = [name, alt1, alt2]
      return status;
  }
}