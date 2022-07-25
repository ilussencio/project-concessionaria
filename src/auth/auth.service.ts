import { Injectable } from '@nestjs/common';
import { UserService } from 'src/app/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}

    async validateUser(email: string, senha: string){
        const user = await this.userService.findBy( {nome:email} );
        console.log(user);
    }



}
