   // Konversi nilai huruf ke bobot
   const BOBOT = { A: 4, B: 3, C: 2, D: 1, E: 0 };

   // Menghitung IPS: jumlah(bobot x SKS) dibagi total SKS
   function hitungIPS(daftar) {
     if (!daftar.length) return 0;
     const totalSks = daftar.reduce((j, mk) => j + mk.sks, 0);
     const totalMutu = daftar.reduce((j, mk) => j + BOBOT[mk.huruf] * mk.sks, 0);
     return Math.round((totalMutu / totalSks) * 100) / 100;
   }

   module.exports = { hitungIPS, BOBOT };
