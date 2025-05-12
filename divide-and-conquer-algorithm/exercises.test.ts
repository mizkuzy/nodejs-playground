import {sum} from "./exercises";

describe('Test sum function', () => {
    test('empty array', () => {
        const input: number[] = []

        expect(sum(input)).toEqual(0)
    })
    test('single-element array', () => {
        const input = [1]

        expect(sum(input)).toEqual(1)
    })
    test('array with positive numbers', () => {
        const input = [10, 0, 20, 100]

        expect(sum(input)).toEqual(130)
    })
    test('array with negative numbers', () => {
        const input = [100, -10, -20]

        expect(sum(input)).toEqual(70)
    })
})