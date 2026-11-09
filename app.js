   test('IPS memperhitungkan bobot SKS (Issue #1)', () => {
     const daftar = [
       { sks: 4, huruf: 'A' },
       { sks: 2, huruf: 'C' },
     ];
     assert.strictEqual(hitungIPS(daftar), 3.33);
   });
