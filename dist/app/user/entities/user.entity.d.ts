import { contas } from "./contas.entity";
import { enderecos } from "./enderecos.entity";
export declare class User {
    idUsuario: number;
    nome: string;
    telefone: string;
    cpf: string;
    dataCriacao: Date;
    contas: contas;
    enderecos: enderecos;
}
