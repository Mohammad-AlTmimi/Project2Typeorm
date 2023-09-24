import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToOne , JoinColumn , PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { role } from "./role.js";
import { Profile } from "./profile.js";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column({nullable: false})
    username: String;

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
        this.password = await bcrypt.hash(this.password, 10)
        }
    }

    @Column({
        enum:['user' , 'admin' , 'editor'],
        default: 'user'
    })
    type: string 

    @Column({ nullable: false})
    password: string;

    @Column({nullable: false})
    email: String

    @OneToOne(()=>Profile, p => p.id ,{eager: true})
    @JoinColumn()
    profile: Profile

    @ManyToMany(() => role)
    @JoinTable()
    roles: role[]
}