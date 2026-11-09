// Konversi nilai huruf ke bobot
const BOBOT = { A: 4, B: 3, C: 2, D: 1, E: 0 };

// Menghitung IPS dari daftar mata kuliah: [{ sks: 4, huruf: 'A' }, ...]
// CATATAN: versi awal ini punya bug (lihat Issue #1)
function hitungIPS(daftar) {
  if (!daftar.length) return 0;
  const total = daftar.reduce((jumlah, mk) => jumlah + BOBOT[mk.huruf], 0);
  return Math.round((total / daftar.length) * 100) / 100;
}

module.exports = { hitungIPS, BOBOT };
