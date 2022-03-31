import {sum, mult} from "./sum";
//data
let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum must be correct', () => {
    //action
    const result1 = sum(a, b)
    const result2 = sum(a, c)

    //expect
    expect(result1).toBe(3)
    expect(result2).toBe(4)
})

test('multiplication must be correct', () => {
    //action
    const resultM1 = mult(a, b)
    const resultM2 = mult(a, c)

    //expect
    expect(resultM1).toBe(2)
    expect(resultM2).toBe(3)
})