submit.addEventListener("click", function () {
  const namaDepan = document.getElementById("namaDepan").value.trim();
  const namaBelakang = document.getElementById("namaBelakang").value.trim();
  const tahun = parseInt(document.getElementById("tahunLahir").value);
  const hobi = document.getElementById("hobi").value.trim();

  const usia = 2025 - tahun;

  output = `${namaDepan} ${namaBelakang} ${usia} ${hobi}`;

  document.getElementById("output").textContent = output;
});
