'use strict';

const tryCreateBufferFrom = () => {
    const b1 = Buffer.from([1, 2, 3, 4, 5, 6]);

    console.log('buffer From array');
    console.log(b1);

    const b2 = Buffer.from('Marcus Aurelius (Марк Аврелий)');

    console.log('buffer from string');
    console.log(b2.toString('hex'));
    console.log(b2.toString('base64'));
    console.log(b2.toString('utf8'));
    console.log(b2.toString('binary'));
}

tryCreateBufferFrom()