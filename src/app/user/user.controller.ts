import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto):Promise<User>{
    return this.userService.create(data);
  }

  @Get()
  async findAll():Promise<User[]> {
    return this.userService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User>{
    const user = await this.userService.findOne(id);
    console.log(user);

    await this.userService.findBy({nome:'Patricia Santana Santiago'});

    if(!user){
      throw new NotFoundException(`Não foi possivel encontrar usuario com o id ${id}`)
    }
    return user;
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto):Promise<User> {
    const user = await this.userService.findOne(id);

    if(!user){
      throw new NotFoundException(`Não foi possivel encontrar usuario com o id ${id}`)
    }
    await this.userService.update(id, data)
    return await this.userService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number):Promise<{mensagem:string}> {
    const user = await this.userService.findOne(id);

    if(!user){
      throw new NotFoundException(`Não foi possivel encontrar usuario com o id ${id}`)
    }
    
    this.userService.remove(id);

    return { mensagem : `Usuario ${id} deletado com sucesso!`}
  }
}
