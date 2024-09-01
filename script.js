const result = document.getElementById('result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreCount = document.getElementById('scoreCount');
const names = document.getElementById('names');
const resetBtn = document.getElementById('resetBtn');
let playerWin = 0;
let compWin = 0;
const choice = ["rock", "paper", "scissors"];
result.textContent = "Select the choice ";
scoreCount.textContent = "";

function getChoice() {
    let Choice = choice[Math.floor(Math.random() * 3)];
    console.log(Choice);
}

function getCompChoice() {
    let compChoice = Math.floor(Math.random() * 3 + 1);
    console.log(compChoice);
    return compChoice
}
function resultOfGame() {
    scoreCount.innerHTML = `<br>Player wins: ${playerWin}<br>Computer wins: ${compWin}`;
}

function resultOfHands() {
    names.textContent = `<br>computer : `;
}

resetBtn.addEventListener('click', () => {
    playerWin = 0;
    compWin = 0;
    result.textContent = "Select the choice ";
    scoreCount.textContent = "";
});


rock.addEventListener('click', () => {

    const compChoice = getCompChoice();
    if (compChoice === 1) {
        result.textContent = "It's a tie!";

    }
    else if (compChoice === 2) {
        result.textContent = "computer win!";
        compWin++;
    }
    else if (compChoice === 3) {
        result.textContent = "You win!";
        playerWin++;
    }
    resultOfGame();
});

paper.addEventListener('click', () => {
    const compChoice = getCompChoice();
    if (compChoice === 1) {
        result.textContent = "You win!";
        playerWin++;
    }
    else if (compChoice === 2) {
        result.textContent = "It's a tie!";
    }
    else if (compChoice === 3) {
        result.textContent = "computer win!";
        compWin++;
    }
    resultOfGame();
});

scissors.addEventListener('click', () => {
    const compChoice = getCompChoice();
    if (compChoice === 1) {
        result.textContent = "computer win!";
        compWin++;
    }
    else if (compChoice === 2) {
        result.textContent = "You win!";
        playerWin++;
    }
    else if (compChoice === 3) {
        result.textContent = "It's a tie!";
    }
    resultOfGame();
});