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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const contas_entity_1 = require("./entities/contas.entity");
const enderecos_entity_1 = require("./entities/enderecos.entity");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(data) {
        let user = new user_entity_1.User;
        user.nome = data.nome;
        user.telefone = data.telefone;
        user.cpf = data.cpf;
        let newConta = new contas_entity_1.contas;
        newConta.email = data.contas.email;
        newConta.senha = data.contas.senha;
        newConta.tipoPerfil = data.contas.tipoPerfil;
        user.contas = newConta;
        let newEndereco = new enderecos_entity_1.enderecos;
        newEndereco.rua = data.endereco.rua;
        newEndereco.numero = data.endereco.numero;
        newEndereco.bairro = data.endereco.bairro;
        newEndereco.cidade = data.endereco.cidade;
        newEndereco.estado = data.endereco.estado;
        newEndereco.cep = data.endereco.cep;
        user.enderecos = newEndereco;
        return this.userRepository.save(user);
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const user = this.userRepository.findOne({ where: { idUsuario: id } });
        return user;
    }
    async findBy(where) {
        try {
            const user = await this.userRepository.findBy(where);
            console.log(user);
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundException('Usuario não encontrado!');
        }
    }
    async update(id, data) {
        console.log(data);
        return await this.userRepository.update({ idUsuario: id }, data);
    }
    remove(id) {
        return this.userRepository.delete(id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USUARIO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map