import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { achievements } from './dto/achievements-profile.dto';
import { GameHistory } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}

  async findAll(id: string): Promise<GameHistory | null> {
    const GameData: GameHistory | null = await this.prismaService.user.findUnique({
      where: { id: id },
    });

    return `data: ${GameData}`;
  }


}
