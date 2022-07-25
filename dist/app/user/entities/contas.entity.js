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
Object.defineProperty(exports, "__esModule", { value: true });
exports.contas = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcryptjs_1 = require("bcryptjs");
let contas = class contas {
    hashPassword() {
        this.senha = (0, bcryptjs_1.hashSync)(this.senha, 10);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], contas.prototype, "idConta", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 255 }),
    __metadata("design:type", String)
], contas.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 255 }),
    __metadata("design:type", String)
], contas.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 50 }),
    __metadata("design:type", String)
], contas.prototype, "tipoPerfil", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => user_entity_1.User, contas => contas),
    __metadata("design:type", user_entity_1.User)
], contas.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], contas.prototype, "hashPassword", null);
contas = __decorate([
    (0, typeorm_1.Entity)()
], contas);
exports.contas = contas;
//# sourceMappingURL=contas.entity.js.map