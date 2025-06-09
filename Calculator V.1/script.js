function hitung(operator) {
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  let myHasil = 0;

  if (isNaN(input1) || isNaN(input2)) {
    document.getElementById("myHasil").textContent = "Masukan angka yang Valid";
    return;
  }
  if (operator === "+") {
    myHasil = input1 + input2;
  } else if (operator === "-") {
    myHasil = input1 - input2;
  } else if (operator === "*") {
    myHasil = input1 * input2;
  } else if (operator === "/") {
    if (input2 === 0) {
      document.getElementById("myHasil").textContent =
        "Tidak bisa dibagi dengan 0";
      return;
    }
    myHasil = input1 / input2;
  }

  document.getElementById("myHasil").textContent = "Hasil = " + myHasil;
}

function reset() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("myHasil").textContent = "Hasil akan muncul di sini";
}

// darkmode toggle
let isDarkMode = false;
const themeToggle = document.getElementById("themeToggle");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  isDarkMode = true;
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  isDarkMode = false;
};

// Event listener untuk toggle button
themeToggle.addEventListener("click", () => {
  if (!isDarkMode) {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
