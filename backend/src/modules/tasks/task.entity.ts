import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsersEntity} from "../auth/auth.entity";

@Entity('task')
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: 'user_id'})
    user!: UsersEntity;

    @Column({ type: 'interval' })
    plan_time!: string;

    @Column({ type: "interval" })
    fact_time!: string;

    @Column({ type: 'text'})
    description!: string;

    @Column({ type: "timestamptz" })
    created_at!: Date;

    @Column({ type: "timestamptz" })
    updated_at!: Date;
}