import { NestFactory } from '@nestjs/core';
import 'dotenv/config';

import { AppModule } from './app/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
};

bootstrap();
