import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCarroDto {
    @IsString()
    @MaxLength(100)
    nome:string;

    @IsString()
    @MaxLength(100)
    marca:string;

    @IsString()
    @MaxLength(100)
    modelo:string;

    @IsNumber()
    ano:number;
}
