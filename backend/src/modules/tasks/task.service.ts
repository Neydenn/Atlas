import {Injectable} from "@nestjs/common";
import {CreateTaskDto} from "./dto/create-task.dto";
import {TaskRepository} from "./task.repository";
import {TaskEntity} from "./task.entity";

type RulesFilter = "Up" | "Down";

@Injectable()
export class TaskService {
    constructor(
        private readonly taskRepo: TaskRepository,
    ) {}

    async createTask(dto: CreateTaskDto): Promise<TaskEntity> {
        return await this.taskRepo.createTask(dto);
    }

}