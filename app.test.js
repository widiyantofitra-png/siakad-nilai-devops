const test = require('node:test');
const assert = require('node:assert');
const { hitungIPS } = require('./app');

test('IPS untuk SKS yang sama', () => {
  const daftar = [
    { sks: 3, huruf: 'A' },
    { sks: 3, huruf: 'B' },
  ];
  assert.strictEqual(hitungIPS(daftar), 3.5);
});

test('IPS daftar kosong adalah 0', () => {
  assert.strictEqual(hitungIPS([]), 0);
});
