import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "./User.js";
import { Premission } from "./Permission.js";

@Entity()
export  class Role extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text',{  
        default : 'user',
         nullable: true})
    name: String

    @ManyToMany(() => User)
    @JoinTable()
    Users: User[]

    @ManyToMany(() => Premission, p => p.Roles,{eager:true})
    @JoinTable()
    Premissions: Premission[]
}