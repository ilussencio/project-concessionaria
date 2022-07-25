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
exports.CarrosService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_paginate_1 = require("nestjs-paginate");
const typeorm_1 = require("typeorm");
const carro_entity_1 = require("./entities/carro.entity");
let CarrosService = class CarrosService {
    constructor(carroRepository) {
        this.carroRepository = carroRepository;
    }
    async create(data) {
        let carro = new carro_entity_1.Carro;
        carro.ano = data.ano;
        carro.marca = data.marca;
        carro.modelo = data.modelo;
        carro.nome = data.nome;
        return this.carroRepository.save(carro);
    }
    async findAll(query) {
        return (0, nestjs_paginate_1.paginate)(query, this.carroRepository, {
            sortableColumns: ['idCarro', 'nome', 'marca', 'modelo', 'ano'],
            defaultSortBy: [['idCarro', 'DESC']],
            maxLimit: 50,
        });
    }
    async findCarros(query, filtro) {
        const queryBuilder = this.carroRepository
            .createQueryBuilder("carro")
            .where("LOWER(carro.nome) like LOWER(:nome) or LOWER(carro.marca) like LOWER(:marca)", { nome: `%${filtro}%`, marca: `%${filtro}%` });
        const result = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, {
            sortableColumns: ['idCarro', 'nome', 'marca', 'modelo', 'ano'],
            defaultSortBy: [['idCarro', 'DESC']],
            maxLimit: 50,
        });
        return result;
    }
    async findOne(id) {
        const carro = await this.carroRepository.findOne({ where: { idCarro: id } });
        return carro;
    }
    async update(id, data) {
        return await this.carroRepository.update({ idCarro: id }, data);
    }
    async remove(id) {
        return await this.carroRepository.delete(id);
    }
};
CarrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CARROS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CarrosService);
exports.CarrosService = CarrosService;
//# sourceMappingURL=carros.service.js.map