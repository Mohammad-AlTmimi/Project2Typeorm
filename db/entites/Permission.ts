import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import  {Role}  from "./Role.js";

@Entity()
export class premission extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column({
        enum:['admin' , 'user' , 'editor'],
        default: 'user'
    })
    name: String

    @ManyToMany(() => Role)
    @JoinTable()
    Roles: Role[]
}