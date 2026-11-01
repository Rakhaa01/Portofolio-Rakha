// Latihan Javascript Dasar . Minggu 06
// Kalkulator nilai rapor di Console

// 1. Pesan pertama ke Console
console.log("Halo,saya Rakha!");
console.log("Ini latihan javascript pertamaku");

// 2. Data siswa
const nama = "M. Rakha Nabil A";
const kelas = "X RPL 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;

console.log(`Nama : ${nama}, kelas : ${kelas},`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// 3. Hasil nilai Rakha
const rataRata = (nilaiTugas + nilaiUts + nilaiUas) / 3;
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log (`Rata-rata nilai: ${rataRata}`);
console.log (`Lulus KKM: ${lulus}`);
console.log (`Dapat sertifikat: ${dapatSertifikat}`);