import { IsEmail, IsString, Matches, MaxLength } from "class-validator";

export class CreateContasDto {
    @IsString()
    @IsEmail()
    @MaxLength(100)
    email: string;

    @IsString()
    @MaxLength(255)
    senha:string;

    @IsString()
    @MaxLength(50)
    tipoPerfil:string;

}
