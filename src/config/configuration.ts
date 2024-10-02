export default (): TConfig => ({
    port: parseInt(process.env.PORT, 10) || 7000,
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
        dialect: process.env.DATABASE_DIALECT || 'mysql',
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASS || '123',
        database: process.env.DATABASE_NAME || 'swarm_test',
        timezone: process.env.DATABASE_TZ || 'Asia/Yekaterinburg',
    },
    cors: {
        origin: true,
        // origin: process.env.NODE_ENV === 'production' ? 'https://crm.citidom.com' : 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: true,
        optionsSuccessStatus: 204,
        credentials: true,
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379
    }
});

export type TConfig = {
    port: number;
    database: TDatabaseConfig;
    cors: TCorsConfig;
    redis: TRedisConfig;
}

export type TDatabaseConfig = {
    host: string;
    port: number;
    dialect: string;
    username: string;
    password: string;
    database: string;
    timezone: string;
}

export type TAwsConfig = {
    endpoint: string;
    ['access.key.id']: string;
    ['secret.access.key']: string;
    region: string;
    ['api.version']: string;
    bucket: string;
}

export type TJWTConfig = {
    key: string;
    expiresIn: string;
};

export type TLocationConfig = {
    center: string;
};

export type TCorsConfig = {
    origin: string|boolean;
    methods: string;
    preflightContinue: boolean;
    optionsSuccessStatus: number;
    credentials: boolean;
};

export type TRedisConfig = {
    host: string;
    port: number;
};
