import { User } from "./user.entity";
export declare class contas {
    idConta: number;
    email: string;
    senha: string;
    tipoPerfil: String;
    user: User;
    hashPassword(): void;
}
