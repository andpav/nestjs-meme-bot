import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { ImageService } from '../image';
import { BotCommands } from './enums';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_KEY, {
  polling: true,
});

const createSendMessage = (id: number) => (resultImageSrc: string) => {
  bot.sendMessage(id, resultImageSrc);
};

@Injectable()
export class BotService {
  botMessage(imageService: ImageService) {
    bot.on('message', (msg) => {
      if (msg.text.toString().toLowerCase() === BotCommands.Start) {
        bot.sendMessage(
          msg.from.id,
          `Hello ${msg.from.first_name} ✋ Please type anything to get meme by your request 😎`,
        );

        return;
      }

      const sendMessage = createSendMessage(msg.from.id);

      imageService.getImage(msg.text.toString().toLowerCase(), sendMessage);
    });
  }
}
