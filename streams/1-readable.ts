'use strict';


// Contracts:
// - Readable
// - EventEmitter
// - AsyncIterator

import * as fs from "node:fs";

const readable = fs.createReadStream('1-readable.ts');

// Styles generating data:
// - fs.createReadStream or other API
// - readable.push()
// - Readable.from(async function *)
// - Readable.from(string or Buffer)

readable.on('error', (error) => {
    console.log({ error });
});

readable.on('end', () => {
    console.log({ event: 'end' });
});

readable.on('close', () => {
    console.log({ event: 'close' });
});

// Styles of reading data from streams:
// - on('data')
// - on('readable')
// - .pipe()
// - AsyncIterable

// Style: on('data')

readable.on('data', (chunk) => {
    console.log({ event: 'data', chunk });
});

// Style: on('readable')

readable.on('readable', () => {
    let data = readable.read();
    console.log({ event: 'readable' });
    while (data !== null) {
        console.log({ readable: data });
        data = readable.read();
    }
});