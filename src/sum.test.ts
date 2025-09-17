//estrutura de teste

import { sum } from "./server";

test("sum of 3 + 7 must be 10", () => {
    const result = sum(7, 3);

    expect(result).toBe(10); //verifica se o resultado é como o esperado
})