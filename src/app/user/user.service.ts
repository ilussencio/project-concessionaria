import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { contas } from './entities/contas.entity';
import { enderecos } from './entities/enderecos.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  async create(data: CreateUserDto): Promise<User> {
    let user = new User;
    user.nome = data.nome;
    user.telefone = data.telefone;
    user.cpf = data.cpf;

    let newConta = new contas;
    newConta.email = data.contas.email;
    newConta.senha = data.contas.senha;
    newConta.tipoPerfil = data.contas.tipoPerfil;
    user.contas = newConta;

    let newEndereco = new enderecos;
    newEndereco.rua = data.endereco.rua;
    newEndereco.numero = data.endereco.numero;
    newEndereco.bairro = data.endereco.bairro;
    newEndereco.cidade = data.endereco.cidade;
    newEndereco.estado = data.endereco.estado;
    newEndereco.cep = data.endereco.cep;
    user.enderecos = newEndereco;
    
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id): Promise<User> {
    const user = this.userRepository.findOne({ where: { idUsuario: id } });
    return user;
  }

  async findBy(
    where: FindOptionsWhere<User>
  ) {
    try {
      const user = await this.userRepository.findBy(where);
      console.log(user);
      return user;
    } catch (error) {
      throw new NotFoundException('Usuario não encontrado!');
    }
  }

  async update(id, data) {
    console.log(data)
    return await this.userRepository.update({ idUsuario: id }, data);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
