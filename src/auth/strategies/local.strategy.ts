import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            userNameField: 'email'
        })
    }
/*
    async validate(email:string, password:string){
        const user = await this.authService.validateUser(email, password);

        if(!user){
            throw new UnauthorizedException("E-mail e/ou senha invalidados");
        }

        return user;
    }*/
}