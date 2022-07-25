import { IsString, MaxLength } from "class-validator";
import { CreateContasDto } from "./create-contas.dto";
import { CreateEnderecoDto } from "./endereco.dto";

export class CreateUserDto {
    @IsString()
    @MaxLength(100)
    nome: string;

    @IsString()
    @MaxLength(100)
    telefone: string;
    
    @IsString()
    @MaxLength(14)
    cpf: string;

    contas:CreateContasDto;

    endereco: CreateEnderecoDto;
}
