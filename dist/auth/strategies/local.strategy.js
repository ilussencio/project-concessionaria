"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            userNameField: 'email'
        });
    }
}
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map