import selectionSort from "./selection-sort";

const testCases = [
    [{sort: selectionSort, name: 'Selection Sort'}]
]

describe.each(testCases)('sort algorithms', ({sort, name}) => {
    test(`empty array. sort by ${name}`, () => {
        const input: number[] = []
        sort(input)
        expect(input).toEqual(input)
    })
    test(`one element array. sort by ${name}`, () => {
        const input = [2]
        sort(input)
        expect(input).toEqual(input)
    })
    test(`sorted array. sort by ${name}`, () => {
        const input = [1, 2, 3]
        sort(input)
        expect(input).toEqual(input)
    })
    test(`unsorted array. sort by ${name}`, () => {
        const input = [2, 0, 3, -6, -4, 1, 5, 4]
        sort(input)
        expect(input).toEqual([-6, -4, 0, 1, 2, 3, 4, 5])
    })
    test(`DESC sorted array. sort by ${name}`, () => {
        const input = [5, 4, 3, 2, 1]
        sort(input)
        expect(input).toEqual([1, 2, 3, 4, 5])
    })
    test(`unsorted array with duplicates. sort by ${name}`, () => {
        const input = [2, 3, 3, 1, 5, 3, 4, 2]
        sort(input)
        expect(input).toEqual([1, 2, 2, 3, 3, 3, 4, 5])
    })
})