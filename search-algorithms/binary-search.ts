/**
 * Returns an index of @searchTerm in @input.
 * Binary search, requires sorted array
 * @param input array of strings
 * @param searchTerm some text
 * @return number | undefined if nothing was found
 */
const search = (input: string[], searchTerm: string): number | undefined => {
    let start = 0;
    let end = input.length - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2 + start);
        const currentValue = input[mid];

        if (currentValue === searchTerm) {
            return mid;
        }

        if (currentValue > searchTerm) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return undefined;
}

export default search;