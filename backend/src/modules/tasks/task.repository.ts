import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TaskEntity} from "./task.entity";
import {Repository} from "typeorm";
import {CreateTaskDto} from "./dto/create-task.dto";

@Injectable()
export class TaskRepository {
    constructor(
       @InjectRepository(TaskEntity)
       private readonly repository: Repository<TaskEntity>,
    ) {}

    createTask(data: CreateTaskDto): Promise<TaskEntity> {
        const task = this.repository.create(data);
        return this.repository.save(task);
    }
}