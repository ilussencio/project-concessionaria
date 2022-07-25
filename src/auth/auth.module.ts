import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/app/user/user.module';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports : [
    DatabaseModule,
    PassportModule,
    UserModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s'}
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
