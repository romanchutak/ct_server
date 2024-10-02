import { Umzug, SequelizeStorage } from 'umzug';
import { Sequelize } from 'sequelize';
import fs = require('fs');
import path = require('path');
import dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
    dialect: 'mysql',
    storage: 'sequelize',
    host: process.env.DATABASE_MIGRATION_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DATABASE,
    timezone: 'Asia/Yekaterinburg',
    dialectOptions: {
        timezone: 'local',
    },
});

export const migrator = new Umzug({
    migrations: {
        glob: ['migrations/*.ts', { cwd: __dirname }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
        modelName: 'migration_meta',
    }),
    logger: console,
    create: {
        template: (filepath) => [
            [
                filepath,
                fs
                    .readFileSync(
                        path.join(__dirname, 'template/sample-migration.ts'),
                    )
                    .toString(),
            ],
        ],
    },
});

export type Migration = typeof migrator._types.migration;

export const seeder = new Umzug({
    migrations: {
        glob: ['seeders/*.ts', { cwd: __dirname }],
    },
    context: sequelize,
    storage: new SequelizeStorage({
        sequelize,
        modelName: 'seeder_meta',
    }),
    logger: console,
});

export type Seeder = typeof seeder._types.migration;
