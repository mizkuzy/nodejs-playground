'use strict';

import { readFileSync, writeFileSync } from 'node:fs';

// read file
const data = readFileSync('./readFileSync.js', 'utf8'); // it's important to pass always encoding

// process file
const processedData = data.split('\n')
    .filter((line) => !!line)
    .join('');

console.log('processedData: ', processedData);

// write to a new file
writeFileSync('../__fixtures__/writeFileSync_test.text', processedData);