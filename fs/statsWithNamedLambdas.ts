import {lstat, Stats} from 'node:fs';

const fileNames = ['readFileSync.ts', 'non-existent-file', 'writeFileSync.ts'];

const stats = new Array(fileNames.length);
const lastIndex = fileNames.length - 1;

const printResult = () => {
    console.log('Result');
    console.dir({stats})
}

// anonymous function is extracted to named so the code is more readable
// and if error happens here we'll see the name in stack trace
const addToStats = (fileName: string, i: number, err: Error | null, stat: Stats) => {
    if (err) {
        console.error(`File ${fileName} is not found`, err);
    } else {
        stats[i] = stat;
    }

    if (i === lastIndex) {
        printResult();
    }
}

const iterate = (fileName: string, i: number) => {
    console.dir({fileName, i});
    // part binding
    const cb = addToStats.bind(null, fileName, i);
    lstat(fileName, cb);
}

fileNames.forEach(iterate)