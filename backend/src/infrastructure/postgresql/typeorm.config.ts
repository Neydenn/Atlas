import {ConfigService} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {TaskEntity} from "../../modules/tasks/task.entity";
import {UsersEntity} from "../../modules/auth/auth.entity";


export const getTypeOrmConfig = (
    config: ConfigService
): TypeOrmModuleOptions => ({
    type: "postgres",
    host: config.get<string>('db.host'),
    port: config.get<number>('db.port'),
    username: config.get<string>('db.user'),
    password: config.get<string>('db.password'),
    database: config.get<string>('db.name'),
    autoLoadEntities: true,
    synchronize: false,
    entities: [TaskEntity, UsersEntity]
})

