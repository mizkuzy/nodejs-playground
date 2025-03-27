'use strict';

const buffer = Buffer.from('Marcus');

for (const code of buffer.values()) {
    console.dir({ code });
}

for (const [index, code] of buffer.entries()) {
    const char = String.fromCharCode(code);
    console.dir({ index, code, char });
}