import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "./User.js";
import { premission } from "./permission.js";

@Entity()
export class role extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({
        enum:['admin' , 'user' , 'editor'],
        default: 'user'
    })
    name: String

    @ManyToMany(() => User)
    @JoinTable()
    Users: User[]

    @ManyToMany(() => premission)
    @JoinTable()
    Premissions: premission[]
}