import { Inject, Injectable } from '@nestjs/common';
import { FilterOperator, paginate, Paginate, PaginateConfig, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Like, Repository } from 'typeorm';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';

@Injectable()
export class CarrosService {
  constructor(
    @Inject('CARROS_REPOSITORY')
    private carroRepository: Repository<Carro>,
  ) { }

  // CRIAR NOVO CARRO
  async create(data: CreateCarroDto): Promise<Carro> {
    let carro = new Carro;
    carro.ano = data.ano;
    carro.marca = data.marca;
    carro.modelo = data.modelo;
    carro.nome = data.nome;
    return this.carroRepository.save(carro);
  }

  //BUSCAR TODOS OS CARROS COM PAGINAÇÃO:
  //PARAMETROS PARA A PAGINAÇÃO -> limit=3&page=2&sortBy=idCarro:DESC
  async findAll(query: PaginateQuery): Promise<Paginated<Carro>> {

    return paginate(query, this.carroRepository, {
      sortableColumns: ['idCarro', 'nome', 'marca', 'modelo', 'ano'],
      defaultSortBy: [['idCarro', 'DESC']],
      maxLimit: 50,
    })

  }

  //BUSCAR CARRO POR NOME E MARCA
  //PARAMETROS PARA A PAGINAÇÃO -> limit=3&page=2&sortBy=idCarro:DESC
  async findCarros(query: PaginateQuery, filtro: string): Promise<Paginated<Carro>> {

    const queryBuilder = this.carroRepository
      .createQueryBuilder("carro")
      .where("LOWER(carro.nome) like LOWER(:nome) or LOWER(carro.marca) like LOWER(:marca)", { nome: `%${filtro}%`, marca: `%${filtro}%` })


    const result = await paginate<Carro>(query, queryBuilder, {
      sortableColumns: ['idCarro', 'nome', 'marca', 'modelo', 'ano'],
      defaultSortBy: [['idCarro', 'DESC']],
      maxLimit: 50,
    })

    return result;
  }

  //BUSCAR UM CARRO POR ID
  async findOne(id): Promise<Carro> {
    const carro = await this.carroRepository.findOne({ where: { idCarro: id } });
    return carro;
  }

  //ATUALIZA UM CARRO
  async update(id, data: UpdateCarroDto) {
    return await this.carroRepository.update({ idCarro: id }, data);
  }

  //DELETA UM CARRO
  async remove(id: number) {
    return await this.carroRepository.delete(id);
  }
}
