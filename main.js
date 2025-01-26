//part 4

// let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

// console.log("Ini while loop");

// let i = 0;
// while (i < hari.length) {
//     console.log(hari[i]);
//     i++;
// }

// console.log("Ini for loop");

// for (let j = hari.length - 1; j >= 0; j--) {
//     console.log(hari[j]);
// }

//studi kasus; nama orang;

// let nama = "Dhaffa";

// for (let k = nama.length - 1; k >= 0; k--) {
//     console.log(nama[k]);
// }

//ngebalikin kata

// let siswa = "Dzulfiqar";
// let reverseSiswa = "";

// for (let l = siswa.length - 1; l >= 0; l--) {
//     reverseSiswa += siswa[l];
// }

// console.log(reverseSiswa);

//nested loop ----ajnuiajiejasdhfjadh

// let bintang = "";
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <=3; j++) {
//         console.log(`Jam: ${i}, Detik: ${j}`)
//     }
// } 

// let bintang = "";
// let jumlahBintang = 3;

// for (i = 1; i <= jumlahBintang; i++) {
//     for (let j = 1;)
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length ; j++) {
//         console.log(`Matriks ${i}`);
//     }
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5){
//         continue;
//     }
//     console.log(i);
// }


//part 6

// function test() {
//     console.log("woiiiiwoiiwoiwoiwi");
// }

// console.log(test());

// function membalikKata(kata) {
//     let balikKata = "";
//     for (let i = kata.length - 1; i >= 0; i--) {
//         balikKata += kata[i];
//     }
//     return balikKata;
// }

// console.log(membalikKata("ASTAGFIRULLAH"));

// macam macam scope di JavaScript :
// Global Scope; Function Scope (Local Scope); Block Scope;

let globalScope = "ini global";

function localScope() { 
    let hewan = "Kucing"; //ini local scope
    if (hewan) {
        let word = "hello"; //ini block scope
    }
    console.log();
}
console.log(localScope());