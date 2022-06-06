let userScore = 0;
let computerScore = 0;
const userInput = "";

function getComputerMove() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return 'Rock'; 
        } else if
    (randomNumber === 1) {
        return 'Paper';
        } else if
    (randomNumber === 2) {
        return 'Scissors';
        }
    }

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
btnRock.addEventListener("click", function () {displayInputs("Rock")});
btnPaper.addEventListener("click", function () {displayInputs("Paper")});
btnScissors.addEventListener("click", function () {displayInputs("Scissors")});


function displayInputs (userInput) {

        const computerMove = getComputerMove();
        const userSelection = document.querySelector(".user-input");
        const computerSelection = document.querySelector(".computer-input");
        const roundResult = document.querySelector(".round-result");
        const userScoreboard = document.querySelector(".scoreboard-user");
        const computerScoreboard = document.querySelector(".scoreboard-computer");
        userSelection.textContent = userInput;
        computerSelection.textContent = computerMove;
        roundResult.textContent = "";
        userScoreboard.textContent = "";
        computerScoreboard.textContent = "";
        
        if (computerMove === userInput) {
            roundResult.textContent = `IT'S A TIE!`
            userScoreboard.textContent = `${userScore}`;
            computerScoreboard.textContent = `${computerScore}`;
        
            } else if
        
        ((userInput === 'Rock' && computerMove === 'Scissors') || 
        (userInput === 'Scissors' && computerMove === 'Paper') || 
        (userInput === 'Paper' && computerMove === 'Rock')) {
            
            userScore++;
    
            roundResult.textContent =  `YOU WIN!`
            userScoreboard.textContent = `${userScore}`;
            computerScoreboard.textContent = `${computerScore}`;
            } else if 
        
        ((computerMove === 'Rock' && userInput === 'Scissors') || 
        (computerMove === 'Scissors' && userInput === 'Paper') || 
        (computerMove === 'Paper' && userInput === 'Rock')) {
        
            computerScore++;
    
            roundResult.textContent = `COMPUTER WINS!`    
            userScoreboard.textContent = `${userScore}`;
            computerScoreboard.textContent = `${computerScore}`;
            }     
        }

if ((userScore === 5) || (computerScore === 5)) {
    btnRock.removeEventListener("click", function () {displayInputs("Rock")});
    btnPaper.removeEventListener("click", function () {displayInputs("Paper")});
    btnScissors.removeEventListener("click", function () {displayInputs("Scissors")});
    }
    