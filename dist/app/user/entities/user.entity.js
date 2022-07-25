"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const contas_entity_1 = require("./contas.entity");
const enderecos_entity_1 = require("./enderecos.entity");
let User = User_1 = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_at' }),
    __metadata("design:type", Date)
], User.prototype, "dataCriacao", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => contas_entity_1.contas, user => User_1, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'idConta' }),
    __metadata("design:type", contas_entity_1.contas)
], User.prototype, "contas", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => enderecos_entity_1.enderecos, user => User_1, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'endereco' }),
    __metadata("design:type", enderecos_entity_1.enderecos)
], User.prototype, "enderecos", void 0);
User = User_1 = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map