import { CreateContasDto } from "./create-contas.dto";
import { CreateEnderecoDto } from "./endereco.dto";
export declare class CreateUserDto {
    nome: string;
    telefone: string;
    cpf: string;
    contas: CreateContasDto;
    endereco: CreateEnderecoDto;
}
