import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotService } from '../bot';
import { ImageService } from '../image';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BotService, ImageService],
})
export class AppModule {}
