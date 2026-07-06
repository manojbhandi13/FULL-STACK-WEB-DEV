let userScore = 0;
let compScore = 0;

let userScoreNode = document.querySelector("#user-score");
let compScoreNode = document.querySelector("#comp-score");

let msgParah = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  //Generate computer's choice
  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  let compGenerated = options[randomIndex];
  return compGenerated;
};

const gameDraw = () => {
  msgParah.innerText = "Game Draw 🤷‍♂️. Play Again";
  msgParah.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreNode.innerText = userScore;
    msgParah.innerText = `You Win! 🔥. Your ${userChoice} beats ${compChoice}`;
    msgParah.style.backgroundColor = "#2d6a4f";
  } else {
    compScore++;
    compScoreNode.innerText = compScore;
    msgParah.innerText = `You Lose! 👎. ${compChoice} beats your ${userChoice}`;
    msgParah.style.backgroundColor = "#6b4a4a";
  }
};

const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  let userWin = true;
  console.log(`user choice: ${userChoice}`);
  console.log(`computer choice: ${compChoice}`);

  let draw = false;
  if (userChoice === compChoice) {
    draw = true;
    gameDraw();
  } else if (userChoice === "rock") {
    if (compChoice === "paper") {
      userWin = false;
    } else {
      userWin = true;
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      userWin = true;
    } else {
      userWin = false;
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "rock") {
      userWin = false;
    } else {
      userWin = true;
    }
  }

  if (!draw) {
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//Alternative
// const winningCombos = {
//   rock: "scissors",
//   paper: "rock",
//   scissors: "paper"
// };

// // Then simply:
// if (userChoice === compChoice) {
//   gameDraw();
// } else if (winningCombos[userChoice] === compChoice) {
//   showWinner(true, userChoice, compChoice);
// } else {
//   showWinner(false, userChoice, compChoice);
// }
