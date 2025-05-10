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
    let index = Math.floor(input.length / 2);

    for (; index >= 0 && start <= end;) {
        const currentValue = input[index];

        if (currentValue === searchTerm) {
            return index;
        }

        if (currentValue > searchTerm) {
            end = index - 1;
            // end = index
        } else {
            start = index + 1;
            // start = index
        }
        index = Math.floor((end - start) / 2 + start);

        if (index < 0) {
            return;
        }
    }
}

export default search;