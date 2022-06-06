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
btnRock.addEventListener("click", getRock);
btnPaper.addEventListener("click", getPaper);
btnScissors.addEventListener("click", getScissors);

function getRock () {displayInputs("Rock")};
function getPaper () {displayInputs("Paper")};
function getScissors () {displayInputs("Scissors")};

function displayInputs (userInput) {

        const computerMove = getComputerMove();
        const userSelection = document.querySelector(".user-input");
        const computerSelection = document.querySelector(".computer-input");
        const roundResult = document.querySelector(".round-result");
        const gameRestart = document.querySelector(".game-restart");
        const userScoreboard = document.querySelector(".scoreboard-user");
        const computerScoreboard = document.querySelector(".scoreboard-computer");
        userSelection.textContent = userInput;
        computerSelection.textContent = computerMove;
        roundResult.textContent = "";
        gameRestart.textContent = "";
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
        
    if ((userScore === 5 ) && (userScore > computerScore)) {
        roundResult.textContent = `YOU BEAT THE GAME!` 
        gameRestart.textContent = `REFRESH PAGE TO PLAY AGAIN!`    
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
        btnRock.removeEventListener("click", getRock);
        btnPaper.removeEventListener("click", getPaper);
        btnScissors.removeEventListener("click", getScissors);
        
    } else if 
        ((computerScore ===5) && (computerScore > userScore)) {
        roundResult.textContent = `THE COMPUTER WHOOOOPED YOU!` 
        gameRestart.textContent = `REFRESH PAGE TO TRY AGAIN!`
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
        btnRock.removeEventListener("click", getRock);
        btnPaper.removeEventListener("click", getPaper);
        btnScissors.removeEventListener("click", getScissors);
        }
}
