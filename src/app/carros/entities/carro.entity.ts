import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carro {
    @PrimaryGeneratedColumn()
    idCarro:string;

    @Column({nullable:false,length:255})
    nome:string;

    @Column({nullable:false,length:255})
    marca:string;

    @Column({nullable:false,length:255})
    modelo:string;

    @Column({nullable:false})
    ano:number;
}
