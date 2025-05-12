import selectionSort from "./selection-sort";
import quickSort from "./quick-sort";
import {SortFunction} from "./types";

type SortTestCaseType = {
    sort: SortFunction,
    name: string
}
const testCases: SortTestCaseType[][] = [
    [{sort: selectionSort, name: 'Selection Sort'}],
    [{sort: quickSort, name: 'Quick Sort'}]
]

describe.each(testCases)('sort algorithms', ({sort, name}) => {
    test(`empty array. sort by ${name}`, () => {
        const input: number[] = []
        expect(sort(input)).toEqual(input)
    })
    test(`one element array. sort by ${name}`, () => {
        const input = [2]
        expect(sort(input)).toEqual(input)
    })
    test(`sorted array. sort by ${name}`, () => {
        const input = [1, 2, 3]
        expect(sort(input)).toEqual(input)
    })
    test(`unsorted array. sort by ${name}`, () => {
        const input = [2, 0, 3, -6, -4, 1, 5, 4]
        expect(sort(input)).toEqual([-6, -4, 0, 1, 2, 3, 4, 5])
    })
    test(`DESC sorted array. sort by ${name}`, () => {
        const input = [5, 4, 3, 2, 1]
        expect(sort(input)).toEqual([1, 2, 3, 4, 5])
    })
    test(`unsorted array with duplicates. sort by ${name}`, () => {
        const input = [2, 3, 3, 1, 5, 3, 4, 2]
        expect(sort(input)).toEqual([1, 2, 2, 3, 3, 3, 4, 5])
    })
})