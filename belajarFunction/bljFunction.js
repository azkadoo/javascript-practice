// ------------------ passing data, passing parameter, passing value ------------------
// function addName(firstname, lastname) {
//   console.log("nama depan", firstname);
//   console.log("nama belakang", lastname);
// }

// addName("Azka", "Nur");

// ------------------ dengan parameter arguments ------------------
// function addName() {
//   console.log("nama depan", arguments[0]);
//   console.log("nama belakang", arguments[1]);
// }

// addName("Azka", "Nur");

// ------------------ dengan parameter arguments[] + for loop ------------------
// function addName() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// addName("Azka", "Nur");

// ------------------ keyword new function ------------------
// const sum1 = new Function("x", "y", "console.log(x+y)");

// // ------------------ standard function ------------------
// function sum2(x, y) {
//   console.log(x + y);
// }

// // ------------------ arrow function ------------------
// const sum3 = (x, y) => {
//   console.log(x + y);
// };

// sum3(3, 6);

// ------------------ function hoisting ------------------
// bisa manggil function duluan sebelum function dibuat
// karena JS = interpreted, jadi codingan dibaca berurutan dari baris paling atas duluan
// maka baris di bawah dianggap belum ada, kalo baris di atasnya belum selesai dibaca
// aneh kan kalo bisa "ngebaca" function yang ada di baris bawah duluan(?)

/* ------------------ TUGAS BUAT FUNCTION ------------------
Menghitung total gaji yang didapat dalam satu bulan dengan input minimal:
- nama karyawan
- gaji per hari
- jumlah hari masuk kerja
**/

//tugas
const totalGaji = (nama, gajiHarian, jmlHariKerja) => {
  gajian = gajiHarian * jmlHariKerja;
  console.log(`jadi, ${nama} mendapatkan gajian sebesar Rp${gajian},-`);
};

totalGaji("Azka", 100000, 20);
