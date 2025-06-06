function hitung(operator) {
  const angka1 = parseFloat(document.getElementById("inputPertama").value);
  const angka2 = parseFloat(document.getElementById("inputKedua").value);
  let myHasil = 0;

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("myHasil").textContent =
      "Masukan angka yang valid!";
    return;
  }

  if (operator === "+") {
    myHasil = angka1 + angka2;
  } else if (operator === "-") {
    myHasil = angka1 - angka2;
  } else if (operator === "*") {
    myHasil = angka1 * angka2;
  } else if (operator === "/") {
    if (angka2 === 0) {
      document.getElementById(
        "myHasil"
      ).textContent = `tidak bisa dibagi dengan 0`;
      return;
    }
    myHasil = angka1 / angka2;
  }

  document.getElementById("myHasil").textContent = "Hasil= " + myHasil;
}
function myReset() {
  location.reload();
}
