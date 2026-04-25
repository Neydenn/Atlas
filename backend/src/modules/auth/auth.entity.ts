import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password_hash: string;

    @Column({ type: "timestamptz" })
    created_at: Date;

    @Column({ type: "timestamptz" })
    updated_at: Date;
}