import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
export declare const userProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<User>;
    inject: string[];
}[];
