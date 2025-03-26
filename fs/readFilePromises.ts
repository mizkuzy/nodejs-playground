'use strict';

import {readFile} from 'node:fs/promises';
import {createReadStream} from 'node:fs';

const main = async () => {
    const stream = createReadStream('./readFilePromises.ts', 'utf8');
    console.log('Read file with stream\n');
    for await (const chunk of stream) {
        console.log(chunk);
    }

    console.log('Read file with Promise\n');

    const data = await readFile('./readFilePromises.ts', 'utf8');
    console.log(data);
}

main().catch(console.error);