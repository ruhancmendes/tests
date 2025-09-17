// arquivo para configurar o jest com typescript

import type { Config } from 'jest';

const config: Config = {
    bail: true, // para parar os testes no primeiro erro
    preset: "ts-jest", //para usar o typescript com jest
    testEnvironment: "node", // ambiente de teste
}

export default config;