import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { Migrations1715116276741 } from "src/migrations/1715116276741-migrations";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: `${process.env.DATABASE_PORT}`,
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations:[Migrations1715116276741],
    synchronize: false,
    autoLoadEntities: true,
    migrationsRun:true,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);