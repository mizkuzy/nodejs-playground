/**
 * Sorts an array of numbers in place, ASC
 * @param input
 */
const sort = (input: number[]) => {
    for (let i = 0; i < input.length; i++) {
        let min = input[i]
        let swapIndex = i
        for (let j = i + 1; j < input.length; j++) {
            const current = input[j]
            if (current < min) {
                min = current
                swapIndex = j
            }
        }
        if (input[i] !== min) {
            input[swapIndex] = input[i]
            input[i] = min
        }
    }
}

export default sort;
