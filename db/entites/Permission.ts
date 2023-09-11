import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { role } from "./role.js";

@Entity()
export class premission extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({
        enum:['admin' , 'user' , 'editor'],
        default: 'user'
    })
    name: String

    @ManyToMany(() => role)
    @JoinTable()
    Roles: role[]
}