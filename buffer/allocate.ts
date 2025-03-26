'use strict';

const tryAllocate = () => {
    // выделить 1Кб
    const b1 = Buffer.alloc(1024);
    console.log({isBuffer: Buffer.isBuffer(b1)});
    console.log(b1);

    const b1Filled = Buffer.alloc(1024, 'ko');
    console.log({isBuffer: Buffer.isBuffer(b1Filled)});
    console.log(b1Filled);

    const b2 = Buffer.allocUnsafe(1024);
    console.log({isBuffer: Buffer.isBuffer(b2)});
    console.log(b2);
}

tryAllocate();

// difference between alloc and allocUnsafe is alloc() ensures that the newly created Buffer instance contents will
// never contain sensitive data from previous allocations, including data that might not have been allocated for Buffers.
// in allocUnsafe case a buffer can have other garbage but it faster