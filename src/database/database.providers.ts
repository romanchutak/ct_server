import { Dialect } from 'sequelize';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { TConfig, TDatabaseConfig } from '@root/config/configuration';

import { models } from './models.for.providers';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        inject: [ConfigService],
        useFactory: async (
            configService: ConfigService<TConfig>,
        ): Promise<Sequelize> => {
            const databaseConfig =
                configService.get<TDatabaseConfig>('database');

            const isDevelopment = false;

            const sequelize = new Sequelize({
                logging: isDevelopment,
                port: databaseConfig.port,
                host: databaseConfig.host,
                dialect: databaseConfig.dialect as Dialect,
                username: databaseConfig.username,
                password: databaseConfig.password,
                database: databaseConfig.database,
                timezone: databaseConfig.timezone,
                dialectOptions: {
                    timezone: 'local',
                },
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 60000,
                    idle: 10000,
                },
                models: models,
            });

            await sequelize.sync({
                // force: true
                alter: { drop: false },
                logging: true,
            });

            return sequelize;
        },
    },
];
