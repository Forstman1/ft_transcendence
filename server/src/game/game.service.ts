import { Injectable } from '@nestjs/common';
import { GameServiceData } from './dto/create-game.dto';
import { v4 as uuidv4 } from 'uuid';
import { GameHistory } from './dto/create-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { PrismaService } from '../prisma.service';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}
  private rooms: Map<
    string,
    {
      owner: string;
      players: string[];
      gameData?: GameServiceData;
      isPoused?: boolean;
    }
  > = new Map();
 
  //------------------ update paddles ------------------

  public updatePaddles(data, roomId: string): void {
    const getRoomData = this.rooms.get(roomId);
    if (!getRoomData) return;
    this.rooms.set(roomId, {
      ...getRoomData,
      gameData: {
        ...getRoomData.gameData,
        leftPaddle: data.leftPaddle,
        rightPaddle: data.rightPaddle,
      },
    });
  }

  //------------------ init game data ------------------

  public initGameData(data, roomId: string): void {
    const getRoomData = this.rooms.get(roomId);
    if (!getRoomData) return;
    getRoomData.gameData.BallInitData = data.ball;
    getRoomData.gameData.ball = data.ball;
    getRoomData.gameData.leftPaddle = data.leftPaddle;
    getRoomData.gameData.rightPaddle = data.rightPaddle;
  }

  //------------------ update ball position ------------------

  public updateBallPosition(roomId: string): void {
    const getRoomData = this.rooms.get(roomId);
    if (!getRoomData) return;

    getRoomData.gameData.ball.x += getRoomData.gameData.ball.speedX / 2;
    getRoomData.gameData.ball.y += getRoomData.gameData.ball.speedY / 2;

    // Check for collisions with the top and bottom boundaries
    if (
      getRoomData.gameData.ball.y - getRoomData.gameData.ball.radius <= 0 ||
      getRoomData.gameData.ball.y + getRoomData.gameData.ball.radius > 100
    ) {
      getRoomData.gameData.ball.speedY = -getRoomData.gameData.ball.speedY;
    }

    // Check if the ball went out of bounds on the left or right sides
    if (getRoomData.gameData.ball.x - getRoomData.gameData.ball.radius < 0) {
      // Ball went out on the left side
      getRoomData.gameData.ball = {
        x: 50,
        y: 50,
        speedX: -getRoomData.gameData.BallInitData.speedX,
        speedY: getRoomData.gameData.BallInitData.speedY,
        radius: getRoomData.gameData.BallInitData.radius,
        maxBallSpeed: getRoomData.gameData.BallInitData.maxBallSpeed,
      };
      getRoomData.gameData.rightScore++;
    } else if (
      getRoomData.gameData.ball.x + getRoomData.gameData.ball.radius >
      100
    ) {
      // Ball went out on the right side
      getRoomData.gameData.ball = {
        x: 50,
        y: 50,
        speedX: -getRoomData.gameData.BallInitData.speedX,
        speedY: getRoomData.gameData.BallInitData.speedY,
        radius: getRoomData.gameData.BallInitData.radius,
        maxBallSpeed: getRoomData.gameData.BallInitData.maxBallSpeed,
      };
      getRoomData.gameData.leftScore++;
    }

    // Check for collisions with the left paddle
    if (
      getRoomData.gameData.ball.x - getRoomData.gameData.ball.radius <=
        getRoomData.gameData.leftPaddle.x +
          getRoomData.gameData.leftPaddle.width &&
      getRoomData.gameData.ball.y + getRoomData.gameData.ball.radius >=
        getRoomData.gameData.leftPaddle.y &&
      getRoomData.gameData.ball.y - getRoomData.gameData.ball.radius <=
        getRoomData.gameData.leftPaddle.y +
          getRoomData.gameData.leftPaddle.height
    ) {
      // Calculate the angle of impact
      const relativeIntersectY =
        getRoomData.gameData.leftPaddle.y +
        getRoomData.gameData.leftPaddle.height / 2 -
        getRoomData.gameData.ball.y;
      const normalizedRelativeIntersectY =
        relativeIntersectY / (getRoomData.gameData.leftPaddle.height / 2);
      const bounceAngle = (normalizedRelativeIntersectY * Math.PI) / 4;

      const ballSpeed = Math.sqrt(
        getRoomData.gameData.ball.speedX ** 2 +
          getRoomData.gameData.ball.speedY ** 2,
      );
      getRoomData.gameData.ball.speedX = ballSpeed * Math.cos(bounceAngle);
      getRoomData.gameData.ball.speedY = ballSpeed * -Math.sin(bounceAngle);
    }

    // Check for collisions with the right paddle
    if (
      getRoomData.gameData.ball.x + getRoomData.gameData.ball.radius >=
        getRoomData.gameData.rightPaddle.x &&
      getRoomData.gameData.ball.y + getRoomData.gameData.ball.radius >=
        getRoomData.gameData.rightPaddle.y &&
      getRoomData.gameData.ball.y - getRoomData.gameData.ball.radius <=
        getRoomData.gameData.rightPaddle.y +
          getRoomData.gameData.rightPaddle.height
    ) {
      const relativeIntersectY =
        getRoomData.gameData.rightPaddle.y +
        getRoomData.gameData.rightPaddle.height / 2 -
        getRoomData.gameData.ball.y;
      const normalizedRelativeIntersectY =
        relativeIntersectY / (getRoomData.gameData.rightPaddle.height / 2);
      const bounceAngle = (normalizedRelativeIntersectY * Math.PI) / 4;

      const ballSpeed = Math.sqrt(
        getRoomData.gameData.ball.speedX ** 2 +
          getRoomData.gameData.ball.speedY ** 2,
      );
      getRoomData.gameData.ball.speedX = ballSpeed * -Math.cos(bounceAngle);
      getRoomData.gameData.ball.speedY = ballSpeed * -Math.sin(bounceAngle);
    }
  }

  //------------------ get update data ------------------

  public getUpdateData(roomId: string) {
    const getRoomData = this.rooms.get(roomId);
    if (!getRoomData) return;
    return {
      ball: getRoomData.gameData.ball,
      leftScore: getRoomData.gameData.leftScore,
      rightScore: getRoomData.gameData.rightScore,
      leftPaddle: getRoomData.gameData.leftPaddle,
      rightPaddle: getRoomData.gameData.rightPaddle,
    };
  }

  //------------------ rooms ------------------

  //------------------ reset game date ------------------

  public resetGameDate(roomId: string): void {
    const getRoomData = this.rooms.get(roomId);
    if (!getRoomData) return;
    getRoomData.gameData.ball = {
      x: 0,
      y: 0,
      speedX: 0,
      speedY: 0,
      radius: 0,
      maxBallSpeed: 0,
    };
    getRoomData.gameData.leftPaddle = { x: 0, y: 0, width: 0, height: 0 };
    getRoomData.gameData.rightPaddle = { x: 0, y: 0, width: 0, height: 0 };
    getRoomData.gameData.leftScore = 0;
    getRoomData.gameData.rightScore = 0;
    getRoomData.gameData.BallInitData = {
      x: 0,
      y: 0,
      speedX: 0,
      speedY: 0,
      radius: 0,
      maxBallSpeed: 0,
    };
  }

  //------------------ create room ------------------

  createRoom(ownerId: string): string {
    const roomId = uuidv4();
    const gameData: GameServiceData = {
      id: roomId,
      BallInitData: {
        x: 0,
        y: 0,
        speedX: 0,
        speedY: 0,
        radius: 0,
        maxBallSpeed: 0,
      },
      ball: {
        x: 0,
        y: 0,
        speedX: 0,
        speedY: 0,
        radius: 0,
        maxBallSpeed: 0,
      },
      leftPaddle: { x: 0, y: 0, width: 0, height: 0 },
      rightPaddle: { x: 0, y: 0, width: 0, height: 0 },
      leftScore: 0,
      rightScore: 0,
    };
    this.rooms.set(roomId, {
      owner: ownerId,
      players: [ownerId],
      gameData,
      isPoused: false,
    });
    // console.log('createRoom all rooms: ', this.rooms);
    return roomId;
  }

  isRoomOwner(userId: string, roomId: string): boolean {
    const room = this.rooms.get(roomId);
    return room && room.owner === userId;
  }

  canAddPlayerToRoom(roomId: string): boolean {
    const room = this.rooms.get(roomId);
    return room && room.players.length < 2;
  }

  addPlayerToRoom(roomId: string, userId: string): void {
    const room = this.rooms.get(roomId);
    if (room && room.players.length < 2) {
      this.rooms.set(roomId, {
        ...room,
        players: [...room.players, userId],
      });
    }
  }

  deleteRoom(roomId: string): void {
    this.rooms.delete(roomId);
    // console.log('deleteRoom roomId: ', roomId);
    // console.log('deleteRoom all rooms: ', this.rooms);
  }

  getRoom(roomId: string): {
    owner: string;
    players: string[];
    gameData?: GameServiceData;
    isPoused?: boolean;
  } {
    return this.rooms.get(roomId);
  }

  setRoomPause(roomId: string, isPoused: boolean): void {
    const room = this.rooms.get(roomId);
    if (room) {
      this.rooms.set(roomId, {
        ...room,
        isPoused,
      });
    }
    // console.log('setRoomPause room: ', room);
  }

  checkFriendIsInOtherRoom(friendId: string): boolean {
    let isFriendInOtherRoom = false;
    this.rooms.forEach((room) => {
      if (room.players.includes(friendId)) {
        isFriendInOtherRoom = true;
      }
    });
    return isFriendInOtherRoom;
  }

  getRoomIdByUserId(userId: string): string | undefined {
    let roomId;
    this.rooms.forEach((room, key) => {
      if (room.players.includes(userId)) {
        roomId = key;
      }
    });
    return roomId;
  }

  getAllRooms = (): Map<
    string,
    {
      owner: string;
      players: string[];
      gameData?: GameServiceData;
      isPoused?: boolean;
    }
  > => {
    return this.rooms;
  };

  //----------------------------------------------------

  createGameHistory = async (
    data: GameHistory,
    opponentId: string,
  ): Promise<void> => {
    const { userId, status, userScore, opponentScore, rounds, matches } = data;
    await this.prisma.gameHistory.create({
      data: {
        user: { connect: { id: userId } },
        opponentId,
        status,
        userScore,
        opponentScore,
        rounds,
        matches,
      },
    });
    return;
  }
}
