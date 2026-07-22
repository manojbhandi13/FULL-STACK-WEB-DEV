let gameBoxList = document.querySelectorAll(".game-box");

let resetButton = document.querySelector("#reset-button");
let refreshButton = document.querySelector("#refresh-button");

let showUserScore = document.querySelector("#user-score");
let showCompScore = document.querySelector("#comp-score");

let userChoice;
let compChoice;

let userBoxes = [];
let compBoxes = [];

let winner;

let enable = true;

let reset = false;

let userScore = 0;
let compScore = 0;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = () => {
  for (let combo of winCombos) {
    if (
      userBoxes.includes(combo[0]) &&
      userBoxes.includes(combo[1]) &&
      userBoxes.includes(combo[2])
    ) {
      userScore++;
      return "user";
    }
    if (
      compBoxes.includes(combo[0]) &&
      compBoxes.includes(combo[1]) &&
      compBoxes.includes(combo[2])
    ) {
      compScore++;
      return "comp";
    }
  }
  return null;
};

const genBoxId = () => {
  let randomId = Math.floor(Math.random() * 9);
  return randomId;
};

const compSelected = (genResult) => {
  genResult.innerText = "O";
  genResult.style.color = "red";
};

const genCompChoice = () => {
  let randomBox;
  do {
    randomBox = genBoxId();
  } while (userBoxes.includes(randomBox) || compBoxes.includes(randomBox));
  let genResult = gameBoxList[randomBox];
  compSelected(genResult);
  compChoice = Number(genResult.getAttribute("id"));
  compBoxes.push(compChoice);
  winner = checkWin();
  if (winner === "comp") {
    resetButton.innerText = "You Lost! Start a new Match";
    enable = false;
    showCompScore.innerText = compScore;
  }
  if (winner == null && userBoxes.length + compBoxes.length == 9) {
    resetButton.innerText = "It's a draw! Play Again..";
  }
};

const userSelected = (box) => {
  box.innerText = "X";
  box.style.color = "red";
};

const play = (e, box) => {
  if (enable) {
    if (
      userBoxes.includes(Number(e.target.getAttribute("id"))) ||
      compBoxes.includes(Number(e.target.getAttribute("id")))
    ) {
      return;
    }
    userSelected(box);
    userChoice = Number(e.target.getAttribute("id"));
    userBoxes.push(userChoice);
    winner = checkWin();
    if (winner === "user") {
      resetButton.innerText = "You Won! Start a new Match";
      enable = false;
      showUserScore.innerText = userScore;
      return;
    }
    if (winner == null && userBoxes.length + compBoxes.length == 9) {
      resetButton.innerText = "It's a draw! Play Again..";
    }
    if (userBoxes.length + compBoxes.length < 9) {
      genCompChoice();
    }
  }
};

gameBoxList.forEach((box) => {
  box.addEventListener("click", (e) => {
    play(e, box);
  });
});

resetButton.addEventListener("click", () => {
  userChoice = undefined;
  compChoice = undefined;
  winner = undefined;
  enable = true;
  userBoxes = [];
  compBoxes = [];
  resetButton.innerText = "Reset";
  let i = 0;
  let placeHolders = ["T", "I", "C", "T", "A", "C", "T", "O", "E"];
  gameBoxList.forEach((box) => {
    box.innerText = placeHolders[i];
    box.style.color = "gray";
    i++;
  });
});

refreshButton.addEventListener("click", () => {
  location.reload();
});
