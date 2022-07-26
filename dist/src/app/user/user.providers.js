"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
const user_entity_1 = require("./entities/user.entity");
exports.userProvider = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.providers.js.map