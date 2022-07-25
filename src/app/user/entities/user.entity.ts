import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { contas } from "./contas.entity";
import { enderecos } from "./enderecos.entity";
import { Field } from '@nestjs/graphql';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({nullable: false, length:100})
    nome: string;

    @Column({nullable: false, length: 100})
    telefone: string;

    @Column({nullable:false, length:100})
    cpf: string;

    @CreateDateColumn({ name: 'create_at'})
    dataCriacao: Date;

    @OneToOne(type => contas, user => User, {cascade: true,eager:true})
    @JoinColumn({name: 'idConta'})
    contas:contas;

    @OneToOne(type => enderecos, user => User,{cascade:true,eager:true})
    @JoinColumn({name: 'endereco'})
    enderecos:enderecos;
}
