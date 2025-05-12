const getRandomNumberFromRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

const quickSort = (input: number[]) => {
    const quickSortInner = (input: number[], pivotIndex: number): number[] => {
        if (input.length < 2) {
            return input;
        }

        const left: number[] = [];
        const right: number[] = [];

        const pivotElement = input[pivotIndex]

        for (let i = 0; i < input.length; i++) {
            if (i === pivotIndex) {
                continue;
            }

            const element = input[i];

            if (element <= pivotElement) {
                left.push(element)
            } else {
                right.push(element)
            }
        }

        const leftSorted = quickSortInner(left, getRandomNumberFromRange(0, left.length - 1));
        const rightSorted = quickSortInner(right, getRandomNumberFromRange(0, right.length - 1));

        return [...leftSorted, pivotElement, ...rightSorted]
    }

    return quickSortInner(input, 0)
}

export default quickSort