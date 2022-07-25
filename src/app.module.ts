import { Module } from '@nestjs/common';
import { CarrosModule } from './app/carros/carros.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, CarrosModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
