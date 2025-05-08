/**
 * Returns a new array without duplicates
 * @param input
 */
const unique = (input: any[]) => {
    const primitives: Set<any> = new Set();
    const objects = new Map<string, any>();

    const uniques: any[] = [];

    for (const val of input) {
        if (val !== null && typeof val === "object") {
            const key = JSON.stringify(val);
            if (!objects.has(key)) {
                objects.set(key, val)
                uniques.push(val)
            }
        } else {
            if (!primitives.has(val)) {
                primitives.add(val)
                uniques.push(val)
            }
        }
    }

    return uniques;
}

export {unique}