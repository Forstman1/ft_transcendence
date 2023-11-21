import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
        PrismaModule,
    ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
