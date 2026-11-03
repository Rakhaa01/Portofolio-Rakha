// 1. Total harga
const hargaNasi = 12000;
const hargaEsTeh = 4000;

function hitungTotal(jumlahNasi, jumlahEsTeh) {
    return (jumlahNasi * hargaNasi) + (jumlahEsTeh * hargaEsTeh);
}

console.log("Soal Praktik Kasir Kantin");
console.log("Hitung Total Harga");
console.log(hitungTotal(4, 6));

// 2. Hitung kembalian
function hitungKembalian(totalHarga, uangBayar) {
    if (uangBayar < totalHarga) { // uang bayar kurang
        return `Uang bayar kurang Rp ${totalHarga - uangBayar} dari total Rp ${totalHarga}`;
    } else if (uangBayar === totalHarga) { // uang bayar pas
        return `Uang bayar pas (${totalHarga - uangBayar} kembalian) dari total Rp ${uangBayar}`; 
    } else { // uang bayar lebih
        return `Uang lebih, kembali Rp ${uangBayar - totalHarga} dari total Rp ${totalHarga}`;
    }
}

console.log("Hitung kembalian");
console.log(hitungKembalian(20000, 20000)); // uang pas
console.log(hitungKembalian(32000, 40000)); // uang lebih
console.log(hitungKembalian(52000,50000)); // uang kurang