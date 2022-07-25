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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrosController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_paginate_1 = require("nestjs-paginate");
const carros_service_1 = require("./carros.service");
const create_carro_dto_1 = require("./dto/create-carro.dto");
const update_carro_dto_1 = require("./dto/update-carro.dto");
let CarrosController = class CarrosController {
    constructor(carrosService) {
        this.carrosService = carrosService;
    }
    async create(data) {
        return this.carrosService.create(data);
    }
    async findAll(query) {
        return this.carrosService.findAll(query);
    }
    async findCarros(query, filtro) {
        return await this.carrosService.findCarros(query, filtro);
    }
    async update(id, data) {
        const carro = await this.carrosService.findOne(id);
        if (!carro) {
            throw new common_1.NotFoundException(`Não foi possivel encontrar o carro com o id = ${id}`);
        }
        await this.carrosService.update(id, data);
        return await this.carrosService.findOne(id);
    }
    async remove(id) {
        const carro = await this.carrosService.findOne(id);
        if (!carro) {
            throw new common_1.NotFoundException(`Não foi possivel encontrar o carro com o id = ${id}`);
        }
        await this.carrosService.remove(id);
        return { mensagem: `Carro com o id ${id} removido com sucesso!` };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carro_dto_1.CreateCarroDto]),
    __metadata("design:returntype", Promise)
], CarrosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarrosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':filtro'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __param(1, (0, common_1.Param)('filtro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CarrosController.prototype, "findCarros", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_carro_dto_1.UpdateCarroDto]),
    __metadata("design:returntype", Promise)
], CarrosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarrosController.prototype, "remove", null);
CarrosController = __decorate([
    (0, common_1.Controller)('carros'),
    __metadata("design:paramtypes", [carros_service_1.CarrosService])
], CarrosController);
exports.CarrosController = CarrosController;
//# sourceMappingURL=carros.controller.js.map