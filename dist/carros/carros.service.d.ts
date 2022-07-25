import { Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';
export declare class CarrosService {
    private carroRepository;
    constructor(carroRepository: Repository<Carro>);
    create(data: CreateCarroDto): Promise<Carro>;
    findAll(query: PaginateQuery): Promise<Paginated<Carro>>;
    findCarros(query: PaginateQuery, filtro: string): Promise<Paginated<Carro>>;
    findOne(id: any): Promise<Carro>;
    update(id: any, data: UpdateCarroDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
