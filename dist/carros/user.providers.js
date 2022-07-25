"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
const carro_entity_1 = require("./entities/carro.entity");
exports.userProvider = [
    {
        provide: 'CARRO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(carro_entity_1.Carro),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.providers.js.map