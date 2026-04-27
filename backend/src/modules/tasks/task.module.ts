import {Module} from "@nestjs/common";
import {TaskEntity} from "./task.entity";
import {TaskRepository} from "./task.repository";
import {TaskService} from "./task.service";
import {TaskController} from "./task.controller";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskEntity]),
    ],
    controllers: [TaskController],
    providers: [TaskService, TaskRepository]
})
export class TaskModule {}
