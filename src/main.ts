import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { TCorsConfig } from './config/configuration';

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // const configService = app.get(ConfigService);

    // app.enableCors(configService.get<TCorsConfig>('cors'));

    await app.listen(3000);
}

bootstrap();
