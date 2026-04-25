import {ConfigService} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";


export const getTypeOrmConfig = (
    config: ConfigService
): TypeOrmModuleOptions => ({
    type: "postgres",
    host: config.get<string>('db.host'),
    port: config.get<number>('db.port'),
    username: config.get<string>('db.username'),
    password: config.get<string>('db.password'),
    database: config.get<string>('db.name'),
    autoLoadEntities: true,
    synchronize: false,
})