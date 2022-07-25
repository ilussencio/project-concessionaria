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
var tipoUser_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoUser = void 0;
const typeorm_1 = require("typeorm");
let tipoUser = tipoUser_1 = class tipoUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], tipoUser.prototype, "idTipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], tipoUser.prototype, "tipoPerfil", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => tipoUser_1, tipoUser => tipoUser),
    __metadata("design:type", Array)
], tipoUser.prototype, "user", void 0);
tipoUser = tipoUser_1 = __decorate([
    (0, typeorm_1.Entity)()
], tipoUser);
exports.tipoUser = tipoUser;
//# sourceMappingURL=tipoUser.entity.js.map