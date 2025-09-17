//estrutura de teste

import { sum } from "./server";

describe("sum function", () => {
    //agrupamento de testes
    
test("sum of 3 + 7 must be 10", () => {
    const result = sum(7, 3);

    expect(result).toBe(10); //verifica se o resultado é como o esperado
})

test("sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2);

    expect(result).toBe(4); //verifica se o resultado é como o esperado
})

})

