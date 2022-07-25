
import { DataSource } from 'typeorm';
import { enderecos } from './entities/enderecos.entity';
import { User } from './entities/user.entity';


export const userProvider = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
