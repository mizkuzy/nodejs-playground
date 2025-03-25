'use strict';

import {readFile, writeFile} from 'node:fs';

readFile('./readFileSync.ts', (err, buffer) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`File size ${buffer.length} bytes`);

    const data = buffer.toString('utf8');
    const processedData = data.split('\n')
        .filter((line) => !!line)
        .join('');

    console.log('Start to write file ASYNC');
    // write to a new file
    writeFile('../__fixtures__/writeFileSync_test.text', processedData, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log(`File size ${processedData.length} bytes`);
    });
});

console.log('Start to read file ASYNC');