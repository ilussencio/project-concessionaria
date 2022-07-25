import { UserService } from 'src/app/user/user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    validateUser(email: string, senha: string): Promise<void>;
}
