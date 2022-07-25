import { DataSource } from 'typeorm';
import { Carro } from './entities/carro.entity';
export declare const CarrosProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Carro>;
    inject: string[];
}[];
