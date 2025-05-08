import {Readable, Writable} from 'node:stream';

// Transform each chunk into an object and add an incremented id field that starts from zero.
// Write the object into the dataOutputStream
// Invoke the callback argument once the datalnputstream Is finished.
function setupStreams(dataInputStream: Readable, dataOutputStream: Writable, callback: () => void) {
    let id = 0;

    dataInputStream.on('end', () => {
        console.log({event: 'end'});
        callback();
    });


    dataInputStream.on('data', (chunk) => {
        const data = JSON.parse(chunk);
        // console.dir({chunk})
        // console.dir({data})
        data.id = id++;
        dataOutputStream.write(data);
    });
}

let readable = new Readable();
let writable = new Writable({
    objectMode: true,
    write:
        (chunk, encoding, callback) => {
            console.log(chunk);
            callback(null)
        }
})

setupStreams(readable, writable, () => console.log("onEnd"))
readable.push('{ "log": "Request received"}');
readable.push('{ "val": "prop"}');
readable.push('{ "ko": "pppp"}');
readable.push(null)
