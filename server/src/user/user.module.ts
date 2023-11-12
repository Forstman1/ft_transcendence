import { Module } from '@nestjs/common';
// import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Module({
  imports: [],
  providers: [UserService, UserDto],
  exports: [UserService],
})
export class UserModule {}
