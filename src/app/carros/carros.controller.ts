import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put, NotFoundException } from '@nestjs/common';
import { Paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) { }

  //CADASTRA
  @Post()
  async create(@Body() data: CreateCarroDto): Promise<Carro> {
    return this.carrosService.create(data);
  }

  //BUSCA TODOS OS CARROS
  //PARAMETROS PARA A PAGINAÇÃO -> limit=3&page=2&sortBy=idCarro:DESC
  @Get()
  async findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Carro>> {
    return this.carrosService.findAll(query);
  }

  //BUSCA CARRO POR MARCA OU NOME
  //PARAMETROS PARA A PAGINAÇÃO -> limit=3&page=2&sortBy=idCarro:DESC
  @Get(':filtro')
  async findCarros(@Paginate() query: PaginateQuery, @Param('filtro') filtro: string): Promise<Paginated<Carro>> {
    return await this.carrosService.findCarros(query, filtro);
  }

  //ATUALIZA UM CARRO
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateCarroDto): Promise<Carro> {
    const carro = await this.carrosService.findOne(id);

    if (!carro) {
      throw new NotFoundException(`Não foi possivel encontrar o carro com o id = ${id}`);
    }

    await this.carrosService.update(id, data);

    return await this.carrosService.findOne(id);
  }

  //DELETA UM CARRO
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<{ mensagem: string }> {
    const carro = await this.carrosService.findOne(id);
    if (!carro) {
      throw new NotFoundException(`Não foi possivel encontrar o carro com o id = ${id}`);
    }

    await this.carrosService.remove(id);

    return { mensagem: `Carro com o id ${id} removido com sucesso!` }
  }
}
