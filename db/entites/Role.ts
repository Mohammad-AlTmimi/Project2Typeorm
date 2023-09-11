import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "./User.js";
import { Premission } from "./Permission.js";

export class Role extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({
        enum:['admin' , 'user' , 'editor'],
        default: 'user'
    })
    name: String

    @ManyToMany(() => User)
    @JoinTable()
    categories: User[]

    @ManyToMany(() => Premission)
    @JoinTable()
    categories: Premission[]
}