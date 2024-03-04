const lancer = document.getElementById("lancer");
const list = document.getElementById("list");
const diceDisplayed = document.getElementById("dice");
const history = [];

function displayDice() {
  const number = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDice(number);
  diceDisplayed.innerHTML = diceFace;
  history.push(number);
  updateHistory();
}

//Déjà appelée dans displayDice
function updateHistory() {
  list.innerHTML = "";
  for (let i = 0; i < history.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Tour ${i + 1} : <span>${getDice(history[i])}</span>`;
    list.appendChild(listItem);
  }
}

//Déjà appelée dans updateHistory
function getDice(number) {
  switch (number) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }
}

function rouler() {
  diceDisplayed.classList.add("go");
  const audio = new Audio("sound-effect/Roll Dice Sounds.mp3");
  audio.play();
  setTimeout(() => {
    diceDisplayed.classList.remove("go");
    audio.pause();
    audio.currentTime = 0;
    displayDice();
  }, 1000);
}
lancer.addEventListener("click", () => {
  rouler();
});
