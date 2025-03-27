'use strict';
import assert from 'node:assert/strict';

// you can work with buffer as a string
const buffer = Buffer.from('Marcus Aurelius');

const val = 'Marcus'
assert.ok(buffer.includes(val), `"${buffer}" does NOT includes ${val}`)

const k = buffer.indexOf('Aurelius');
console.log(`Index of "Aurelius" is ${k}`);

console.log(`Slice 3-5 "${buffer.subarray(3, 6)}"`);
