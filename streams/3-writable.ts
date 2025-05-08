'use strict';

import * as fs from "node:fs";
import * as stream from "node:stream";

const readable = fs.createReadStream('data.tmp');
const writable = new stream.Writable({
    write(chunk, encoding, next) {
        console.log({ size: chunk.length, encoding, next });
        //next(new Error('Error flushing data'));
        next();
    },
});

readable.pipe(writable);

readable.on('end', () => {
    console.log('Done');
});
