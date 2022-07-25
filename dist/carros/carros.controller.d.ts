import { Paginated, PaginateQuery } from 'nestjs-paginate';
import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';
export declare class CarrosController {
    private readonly carrosService;
    constructor(carrosService: CarrosService);
    create(data: CreateCarroDto): Promise<Carro>;
    findAll(query: PaginateQuery): Promise<Paginated<Carro>>;
    findCarros(query: PaginateQuery, filtro: string): Promise<Paginated<Carro>>;
    update(id: number, data: UpdateCarroDto): Promise<Carro>;
    remove(id: number): Promise<{
        mensagem: string;
    }>;
}
