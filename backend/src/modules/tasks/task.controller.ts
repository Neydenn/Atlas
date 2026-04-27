import {Body, Controller, Get, Post} from "@nestjs/common";
import {CreateTaskDto} from "./dto/create-task.dto";
import {TaskService} from "./task.service";
import {TaskEntity} from "./task.entity";

@Controller("tasks")
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
    ) {}

    @Post("create")
    createTask(@Body() dto: CreateTaskDto): Promise<TaskEntity> {
        return this.taskService.createTask(dto);
    }
}

