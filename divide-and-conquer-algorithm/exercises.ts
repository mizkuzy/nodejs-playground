// Exercises from Grok algorithms

/**
 * Ex.4.1
 * Count elements in array recursively
 */
const sum = (input: number[]): number => {
    console.log('input', input);
    if (input.length === 0) {
        return 0
    }
    if (input.length === 1) {
        return input[0]
    }

    return input[0] + sum(input.slice(1))
}

export {
    sum
}