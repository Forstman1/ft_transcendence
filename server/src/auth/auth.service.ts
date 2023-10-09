import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    userInput: Prisma.UserCreateInput,
  ): Promise<Prisma.UserCreateInput> {
    const userFound = await this.usersService.findUser({
      username: userInput.username,
    });
    if (userFound === null) {
      const userCreated = await this.usersService.createUser(userInput);
      return userCreated;
    }
    return userFound;
  }

  async login(user: Prisma.UserCreateInput) {
    const userFound = await this.validateUser(user);
    const payload = { username: userFound.username, sub: userFound.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
