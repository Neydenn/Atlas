import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

}