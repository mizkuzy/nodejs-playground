import {lstat} from 'node:fs/promises'

const fileNames = ['readFileSync.ts', 'non-existent-file', 'writeFileSync.ts'];
const promises = fileNames.map((fileName) => lstat(fileName));

Promise.allSettled(promises).then(console.dir);