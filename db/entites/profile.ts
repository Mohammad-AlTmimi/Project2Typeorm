import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column()
    firstName: String

    @Column()
    lastName: String

    @Column()
    dateOfBirth: String
}