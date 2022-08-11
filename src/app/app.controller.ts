import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { BotService } from '../bot';
import { ImageService } from '../image';

@Controller()
export class AppController {
  constructor(
    private botService: BotService,
    private imageService: ImageService,
  ) {}

  @Get()
  getBotDialog(@Res() res) {
    this.botService.botMessage(this.imageService);
    res.status(HttpStatus.OK).send('Bot service started');
  }
}
