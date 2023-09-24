import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import  {Role}  from "./Role.js";

@Entity()
export class Premission extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column()
    name: String

    @ManyToMany(() => Role)
    @JoinTable()
    Roles: Role[]
}