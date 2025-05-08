import {unique} from "./unique";

const uniqueFunctions = [
    unique
]

uniqueFunctions.forEach(fn => {
    describe("unique()", () => {
        test("empty array", () => {
            const input: unknown[] = []
            const output: unknown[] = fn(input)

            expect(output).not.toBeNull();
            expect(output).not.toBeUndefined();
            expect(output?.length).toEqual(0);
        })
        test("array with string duplicates", () => {
            const input = ['a', 'b', 'a', 'c'];
            const output = fn(input);
            const expectedOutput = ['a', 'b', 'c'];

            expect(output).toEqual(expectedOutput);
        })
        test("array without string duplicates", () => {
            const input = ['a', 'b', 'c'];
            const output = fn(input);

            expect(output).toEqual(input);
        })
        test("array with number duplicates", () => {
            const input = [1, 2, 2, 3];
            const output = fn(input);
            const expectedOutput = [1, 2, 3];

            expect(output).toEqual(expectedOutput);
        })
        test("array without number duplicates", () => {
            const input = [1, 2, 3];
            const output = fn(input);

            expect(output).toEqual(input);
        })
        test("array with object duplicates", () => {
            const input = [{a: 1}, {b: 2}, {c: 3}, {a: 1}];
            const output = fn(input);
            const expectedOutput = [{a: 1}, {b: 2}, {c: 3}];

            expect(output).toEqual(expectedOutput);
        })
        test("array without object duplicates", () => {
            const input = [{a: 1}, {b: 2}, {c: 3}];
            const output = fn(input);

            expect(output).toEqual(input);
        })
        test("array with mixed types duplicates", () => {
            const input = [1, 2, null, undefined, 'word', 'word', 'one more word', 2, null];
            const output = fn(input);
            const expectedOutput = [1, 2, null, undefined, 'word', 'one more word'];

            expect(output).toEqual(expectedOutput);
        })
        test("array without mixed types duplicates", () => {
            const input = [1, 2, null, undefined, 'word', 'one more word'];
            const output = fn(input);

            expect(output).toEqual(input);
        })
    })
})
