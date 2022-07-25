"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrosProviders = void 0;
const carro_entity_1 = require("./entities/carro.entity");
exports.CarrosProviders = [
    {
        provide: 'CARROS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(carro_entity_1.Carro),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=carros.providers.js.map