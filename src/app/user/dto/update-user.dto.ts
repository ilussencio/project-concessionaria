import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, MaxLength } from "class-validator";
import { CreateContasDto } from "./create-contas.dto";
import { CreateEnderecoDto } from "./endereco.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {

}
