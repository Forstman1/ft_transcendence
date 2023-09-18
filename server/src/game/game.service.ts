import { Injectable } from '@nestjs/common';
import { Ball } from './dto/create-game.dto';

@Injectable()
export class GameService {
  private BallInitData: Ball;
  private ball: Ball = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    radius: 0,
    maxBallSpeed: 0,
  };
  private leftPaddle = { x: 0, y: 0, width: 0, height: 0 };
  private rightPaddle = { x: 0, y: 0, width: 0, height: 0 };
  private leftScore = 0;
  private rightScore = 0;

  public updatePaddles(data): void {
    this.leftPaddle = data.leftPaddle;
    this.rightPaddle = data.rightPaddle;
  }

  public initGameData(data): void {
    this.BallInitData = data.ball;
    this.ball = data.ball;
    this.leftPaddle = data.leftPaddle;
    this.rightPaddle = data.rightPaddle;
  }

  // This function updates the ball's position and handles bouncing
  public updateBallPosition(): void {
    // Calculate the new ball position based on velocity
    this.ball.x += this.ball.speedX;
    this.ball.y += this.ball.speedY;

    // Check for collisions with the top and bottom boundaries
    if (
      this.ball.y - this.ball.radius <= 0 ||
      this.ball.y + this.ball.radius > 100
    ) {
      this.ball.speedY = -this.ball.speedY;
    }

    // Check if the ball went out of bounds on the left or right sides
    if (this.ball.x - this.ball.radius < 0) {
      // Ball went out on the left side
      this.ball = {
        x: 50,
        y: 50,
        speedX: this.BallInitData.speedX,
        speedY: this.BallInitData.speedY,
        radius: this.BallInitData.radius,
        maxBallSpeed: this.BallInitData.maxBallSpeed,
      };
      this.rightScore++;
    } else if (this.ball.x + this.ball.radius > 100) {
      // Ball went out on the right side
      this.ball = {
        x: 50,
        y: 50,
        speedX: -this.BallInitData.speedX,
        speedY: this.BallInitData.speedY,
        radius: this.BallInitData.radius,
        maxBallSpeed: this.BallInitData.maxBallSpeed,
      };
      this.leftScore++;
    }

    // Check for collisions with the left paddle
    if (
      this.ball.x - this.ball.radius <=
        this.leftPaddle.x + this.leftPaddle.width &&
      this.ball.y + this.ball.radius >= this.leftPaddle.y &&
      this.ball.y - this.ball.radius <=
        this.leftPaddle.y + this.leftPaddle.height
    ) {
      // Calculate the angle of impact
      const relativeIntersectY =
        this.leftPaddle.y + this.leftPaddle.height / 2 - this.ball.y;
      const normalizedRelativeIntersectY =
        relativeIntersectY / (this.leftPaddle.height / 2);
      const bounceAngle = normalizedRelativeIntersectY * (Math.PI / 4); // Adjust this angle as needed

      // Adjust the ball's velocities based on the angle of impact
      const ballSpeed = Math.sqrt(
        this.ball.speedX ** 2 + this.ball.speedY ** 2,
      );
      this.ball.speedX = ballSpeed * Math.cos(bounceAngle);
      this.ball.speedY = ballSpeed * Math.sin(bounceAngle);
    }

    // Check for collisions with the right paddle
    if (
      this.ball.x + this.ball.radius >= this.rightPaddle.x &&
      this.ball.y + this.ball.radius >= this.rightPaddle.y &&
      this.ball.y - this.ball.radius <=
        this.rightPaddle.y + this.rightPaddle.height
    ) {
      // Calculate the angle of impact
      const relativeIntersectY =
        this.rightPaddle.y + this.rightPaddle.height / 2 - this.ball.y;
      const normalizedRelativeIntersectY =
        relativeIntersectY / (this.rightPaddle.height / 2);
      const bounceAngle = normalizedRelativeIntersectY * (Math.PI / 4); // Adjust this angle as needed

      // Adjust the ball's velocities based on the angle of impact
      const ballSpeed = Math.sqrt(
        this.ball.speedX ** 2 + this.ball.speedY ** 2,
      );
      this.ball.speedX = -ballSpeed * Math.cos(bounceAngle); // Reverse horizontal velocity
      this.ball.speedY = ballSpeed * Math.sin(bounceAngle);
    }
  }

  // This function retrieves the current ball position
  public getUpdateData() {
    return {
      ball: this.ball,
      leftScore: this.leftScore,
      rightScore: this.rightScore,
    };
  }
}
