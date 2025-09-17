//estrutura de teste

import { sum } from "./server";

describe("sum function", () => {
    //agrupamento de testes

    let sumResult: number //variável no escopo para todas as funções de teste terão acesso

    beforeAll(() => {
        //executa uma vez antes de todos os testes
        sumResult = 10

        console.log("EXECUTADO ANTES DOS TESTES", sumResult)
    })

    afterAll(() => {
        //executa uma vez depois de todos os testes
        sumResult = 0

        console.log("EXECUTADO DEPOIS DOS TESTES", sumResult)
    })

    it("should do sum of 3 + 7 must be 10", () => {
    const result = sum(7, 3);

    expect(result).toBe(10); //verifica se o resultado é como o esperado
    })

    it("should do sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2);

    expect(result).toBe(4); //verifica se o resultado é como o esperado
    })

})

