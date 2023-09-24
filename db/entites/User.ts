import { generatePrime } from "crypto";
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToOne , JoinColumn , PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { Role } from "./Role.js";
import { Profile } from "./Profile.js";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    username: String;

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
        this.password = await bcrypt.hash(this.password, 10)
        }
    }
    @Column()
    password: string;

    @Column({
        type: 'enum',
                enum:['user' , 'admin' , 'editor'],
                default: 'user'
            })
            type: string

    

    @Column({nullable: false})
    email: string

    @OneToOne(()=>Profile, p => p.id ,{eager: true})
    @JoinColumn()
    profile: Profile

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]
}