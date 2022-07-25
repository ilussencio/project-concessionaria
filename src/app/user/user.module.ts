import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './user.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProvider,
    UserService],
  exports: [UserService]
})

export class UserModule {}
