
import { DataSource } from 'typeorm';
import { Carro } from './entities/carro.entity';


export const CarrosProviders = [
  {
    provide: 'CARROS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Carro),
    inject: ['DATA_SOURCE'],
  },
];
