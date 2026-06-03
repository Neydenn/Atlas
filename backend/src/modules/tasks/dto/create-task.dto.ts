import {IsInt, IsNotEmpty, IsString, Max, Min} from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    taskName!: string;

    @IsString()
    @IsNotEmpty()
    planTime!: string

    @IsString()
    @IsNotEmpty()
    factTime!: string

    @IsString()
    description!: string
}