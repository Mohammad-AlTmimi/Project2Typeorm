var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role.js";
let Premission = class Premission extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Premission.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Premission.prototype, "name", void 0);
__decorate([
    ManyToMany(() => Role),
    JoinTable(),
    __metadata("design:type", Array)
], Premission.prototype, "Roles", void 0);
Premission = __decorate([
    Entity()
], Premission);
export { Premission };
