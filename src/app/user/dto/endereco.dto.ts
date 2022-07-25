import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateEnderecoDto {
    @IsString()
    @MaxLength(100)
    rua: string;

    @IsNumber()
    @MaxLength(100)
    numero: number;

    @IsString()
    @MaxLength(100)
    bairro:string;

    @IsString()
    @MaxLength(100)
    cidade:string;

    @IsString()
    @MaxLength(100)
    estado:string;

    @IsNumber()
    cep:number;

}
