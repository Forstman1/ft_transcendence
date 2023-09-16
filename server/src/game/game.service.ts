import { Body, Injectable } from '@nestjs/common';
import { GameStatic } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { type } from 'os';

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

    // // Check if the ball went out of bounds on the left or right sides
    if (this.ball.x - this.ball.radius < 0) {
      // Ball went out on the left side
      this.ball = { x: 50, y: 50, speedX: 0.5, speedY: 0.7, radius: 1 };
      // Reset paddle positions
      // leftPaddleY = 50 - paddleHeight / 2;
      // rightPaddleY = 50 - paddleHeight / 2;
    } else if (this.ball.x + this.ball.radius > 100) {
      // Ball went out on the right side
      this.ball = { x: 50, y: 50, speedX: -0.5, speedY: 0.7, radius: 1 };
      // Reset paddle positions
      // leftPaddleY = 50 - paddleHeight / 2;
      // rightPaddleY = 50 - paddleHeight / 2;
    }

    // // Check for collisions with the left paddle
    // if (
    //   this.ball.x - this.ball.radius <= leftPaddleX + paddleWidth &&
    //   this.ball.y >= leftPaddleY &&
    //   this.ball.y <= leftPaddleY + paddleHeight
    // ) {
    //   this.ball.speedX = Math.abs(this.ball.speedX); // Reverse the horizontal velocity
    // }

    // // Check for collisions with the right paddle
    // if (
    //   this.ball.x + this.ball.radius >= rightPaddleX &&
    //   this.ball.y >= rightPaddleY &&
    //   this.ball.y <= rightPaddleY + paddleHeight
    // ) {
    //   this.ball.speedX = -Math.abs(this.ball.speedX); // Reverse the horizontal velocity
    // }
  }

  // This function retrieves the current ball position
  public getBall(): Ball {
    return this.ball;
  }
}

// constructor(private readonly server: Server) {}

// // Function to update the ball's position
// updateBallPosition(): void {
//   this.ballPosition.x += this.ballVelocity.x;
//   this.ballPosition.y += this.ballVelocity.y;

//   // Implement collision detection and update ball velocity if needed
//   this.handleCollision();

//   // Emit the updated ball position to all connected clients
//   this.server.emit('updateBallPosition', this.ballPosition);
// }

// // Function to handle collision with walls
// private handleCollision(): void {
//   if (this.ballPosition.x - this.ballRadius < 0 || this.ballPosition.x + this.ballRadius > this.canvasWidth) {
//     this.ballVelocity.x = -this.ballVelocity.x;
//   }

//   if (this.ballPosition.y - this.ballRadius < 0 || this.ballPosition.y + this.ballRadius > this.canvasHeight) {
//     this.ballVelocity.y = -this.ballVelocity.y;
//   }
// }

// // Function to get the initial ball position
// getInitialBallPosition(): { x: number; y: number } {
//   return this.ballPosition;
// }
