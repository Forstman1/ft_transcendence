import { Injectable } from '@nestjs/common';
import { Gamedata } from './dto/create-game.dto';

type Ball = {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
};

@Injectable()
export class GameService {
  private ball = { x: 50, y: 50, speedX: 0.5, speedY: 0.7, radius: 1 };
  private leftPaddle = { x: 0.666, y: 50, width: 1, height: 20 }; // x and y are the top left corner of the paddle rectangle in percentage of the canvas width and height the width and height are also in percentage of the canvas width and height
  private rightPaddle = { x: 98.333, y: 50, width: 1, height: 20 }; // x and y are the top left corner of the paddle rectangle in percentage of the canvas width and height the width and height are also in percentage of the canvas width and height

  public updatePaddles(data): void {
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
      this.ball = { x: 50, y: 50, speedX: 0.5, speedY: 0.7, radius: 1 };
    } else if (this.ball.x + this.ball.radius > 100) {
      // Ball went out on the right side
      this.ball = { x: 50, y: 50, speedX: -0.5, speedY: 0.7, radius: 1 };
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
  public getBall(): Ball {
    return this.ball;
  }
}
