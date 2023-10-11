import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from './users.service';
import { UsersCreateDto } from './users.dto';
import { UsersFindDto } from './users-find.dto';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersCreateDto, UsersFindDto],
  exports: [UsersService],
})
export class UsersModule {}
