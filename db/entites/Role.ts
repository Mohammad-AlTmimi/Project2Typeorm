import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "./User.js";
import { premission } from "./permission.js";

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

    @ManyToMany(() => premission, p => p.Roles,{eager:true})
    @JoinTable()
    Premissions: premission[]
}