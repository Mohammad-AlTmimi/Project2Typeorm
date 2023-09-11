import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { Role } from "./Role.js";

export class Premission extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({
        enum:['admin' , 'user' , 'editor'],
        default: 'user'
    })
    name: String

    @ManyToMany(() => Role)
    @JoinTable()
    categories: Role[]
}