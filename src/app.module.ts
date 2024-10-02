import { Module, Logger } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';

import config from '@root/config/configuration';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        }),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        Logger
    ],
})
export class AppModule {}
