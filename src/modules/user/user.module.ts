import { Module } from '@nestjs/common';

import { userProviders } from './user.providers';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders,
    ],
    exports: [UserService]
})
export class UserModule {}
