const words = ["Good Game", "Well Played", "Happy New Year", "Thank You"];

function myBtn() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  document.getElementById("output").textContent = `" ${randomWord} "`;
}
