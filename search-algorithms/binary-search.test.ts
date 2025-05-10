import binarySearch from './binary-search'

const generalInputs = [
    [['test2']],
    [['test', 'test1', 'test2', 'test3']],
    [['test', 'test1', 'test2', 'test3', 'test4']]
]
describe.each(generalInputs)("binary search for input %p", (input) => {
    test("returns 0, searchTerm is the first element of input", () => {
        const searchTerm = input[0]

        expect(binarySearch(input, searchTerm)).toBe(0)
    })

    test("returns 5, searchTerm is the last element of input", () => {
        const searchTerm = input[input.length - 1]

        expect(binarySearch(input, searchTerm)).toBe(input.length - 1)
    })

    test("returns undefined, searchTerm doesn't exist in input and less then 1st item", () => {
        const searchTerm = 'abc'

        expect(binarySearch(input, searchTerm)).toBeUndefined()
    })

    test("returns undefined, searchTerm doesn't exist in input and more then last item", () => {
        const searchTerm = 'www'

        expect(binarySearch(input, searchTerm)).toBeUndefined()
    })
})

const middleInputs = [
    [['test', 'test1', 'test2', 'test3']],
    [['test', 'test1', 'test2', 'test3', 'test4']]
]

describe.each(middleInputs)("binary search for input %p, searchTerm in the middle", (input) => {
    test("returns 3, searchTerm is in the middle of input", () => {
        const searchTerm = 'test2'

        expect(binarySearch(input, searchTerm)).toBe(2)
    })
})

const duplicateInputs = [
    [{input: ['test'], expected: 0}],
    [{input: ['abc', 'test'], expected: 1}],
    [{input: ['abc', 'test', 'test'], expected: 1}],
    [{input: ['abc', 'test', 'test', 'test'], expected: 1}],
]

describe.each(duplicateInputs)("binary search for input %p, %i", ({input, expected}) => {
    test("returns %i, searchTerm = test", () => {
        const searchTerm = 'test'

        expect(binarySearch(input, searchTerm)).toBe(expected);
    })
})

test("return undefined if an empty array", () => {
    const searchTerm = 'test2'
    const input: string[] = [];

    expect(binarySearch(input, searchTerm)).toBeUndefined()
})