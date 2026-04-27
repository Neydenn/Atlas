import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import configuration from "./config/configuration";
import {TaskModule} from "./modules/tasks/task.module";
import {DatabaseModule} from "./infrastructure/postgresql/database.module";

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration],
      }),
      TaskModule,
      DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
