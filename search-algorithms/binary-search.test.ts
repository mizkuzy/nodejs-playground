import binarySearch from './binary-search'

describe("binary search algorithm", () => {
    test("returns 0, searchTerm is the first element of input", () =>{
        const searchTerm = 'test'
        const input = ['test', 'test1', 'test2', 'test3'];

        expect(binarySearch(input, searchTerm)).toBe(0)
    })

    test("returns 3, searchTerm is in the middle of input", () =>{
        const searchTerm = 'test3'
        const input = ['test', 'test1', 'test2', 'test3', 'test4'];

        expect(binarySearch(input, searchTerm)).toBe(3)
    })

    test("returns 5, searchTerm is the last element of input", () =>{
        const searchTerm = 'test5'
        const input = ['test', 'test1', 'test2', 'test3', 'test4', 'test5'];

        expect(binarySearch(input, searchTerm)).toBe(5)
    })

    test("returns undefined, searchTerm doesn't exist in input and less then 1st item", () =>{
        const searchTerm = 'abc'
        const input = ['test', 'test1', 'test2', 'test3'];

        expect(binarySearch(input, searchTerm)).toBeUndefined()
    })

    test("returns undefined, searchTerm doesn't exist in input and more then last item", () =>{
        const searchTerm = 'www'
        const input = ['test', 'test1', 'test2', 'test3'];

        expect(binarySearch(input, searchTerm)).toBeUndefined()
    })
})