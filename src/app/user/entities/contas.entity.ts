import { BeforeInsert, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { hashSync } from "bcryptjs"

@Entity()
export class contas{

    @PrimaryGeneratedColumn()
    idConta:number;

    @Column({nullable:false,length:255})
    email:string;

    @Column({nullable:false,length:255})
    senha:string;

    @Column({nullable:false,length:50})
    tipoPerfil:String;

    @OneToOne(type => User, contas => contas)
    user:User;

    @BeforeInsert()
    hashPassword(){
        this.senha = hashSync(this.senha, 10);
    }
}