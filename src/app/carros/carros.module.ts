import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CarrosProviders } from './carros.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [CarrosController],
  providers: [
    CarrosService,
    ...CarrosProviders]
})
export class CarrosModule {}
