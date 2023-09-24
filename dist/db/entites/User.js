var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';
import { Role } from "./Role.js";
import { Profile } from "./Profile.js";
let User = class User extends BaseEntity {
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
};
__decorate([
    PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: ['user', 'admin', 'editor'],
        default: 'user'
    }),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    Column({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    OneToOne(() => Profile, p => p.id, { eager: true }),
    JoinColumn(),
    __metadata("design:type", Profile)
], User.prototype, "profile", void 0);
__decorate([
    ManyToMany(() => Role),
    JoinTable(),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
User = __decorate([
    Entity()
], User);
export { User };
