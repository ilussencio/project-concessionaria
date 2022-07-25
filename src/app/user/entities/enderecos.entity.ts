import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class enderecos{
    @PrimaryGeneratedColumn()
    idEnderecos:number;

    @Column({nullable:false,length: 255})
    rua: string;

    @Column({nullable:false})
    numero: number;

    @Column({nullable:false,length: 255})
    bairro:string;

    @Column({nullable:false,length: 255})
    cidade:string;

    @Column({nullable:false,length: 255})
    estado:string;

    @Column({nullable:false})
    cep:number;

    @OneToOne(type => User, enderecos => enderecos)
    user:User;


}