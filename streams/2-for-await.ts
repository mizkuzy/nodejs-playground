'use strict';

import { Readable } from 'node:stream';

const readable = new Readable();

// Write style: readable.push(data)
// Read style: AsyncIterable

readable.push('Hello ');
//readable.emit('error', new Error('Cant generate data'));
readable.push('World!');
readable.push(null);

const main = async () => {
    for await (const chunk of readable) {
        console.log({ chunk });
    }
};

main();