const tambah = document.getElementById("tambahBtn");
const kurang = document.getElementById("kurangBtn");
const reset = document.getElementById("myReset");
const hasil = document.getElementById("hasil");

let hitung = 0;

tambah.onclick = function () {
  hitung++;
  hasil.textContent = `" ${hitung} "`;
};

kurang.onclick = function () {
  hitung--;
  hasil.textContent = `" ${hitung} "`;
};

reset.onclick = function () {
  hitung = 0;
  hasil.textContent = `" ${hitung} "`;
};
