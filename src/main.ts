import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { TCorsConfig } from './config/configuration';

import * as dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);

    app.enableCors(configService.get<TCorsConfig>('cors'));

    await app.listen(configService.get('port', 7000), () => console.log('Server is started ON PORT: ' + configService.get('port', 7000)));
}

bootstrap();
