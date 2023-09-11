import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { Role } from "./Role.js";

export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({nullable: false})
    username: String;

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
        this.password = await bcrypt.hash(this.password, 10)
        }
    }
    @Column({ nullable: false})
    password: string;

    @Column({nullable: false})
    email: String

    @ManyToMany(() => Role)
    @JoinTable()
    categories: Role[]
}