import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Profile extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({nullable: false})
    firstName: String

    @Column({nullable: false})
    lastName: String

    @Column()
    dateOfBirth: String
}