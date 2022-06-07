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
        const roundResult2 = document.querySelector(".round-result2");
        const userScoreboard = document.querySelector(".scoreboard-user");
        const computerScoreboard = document.querySelector(".scoreboard-computer");

        userSelection.innerHTML = getUserSelectionImage();
        computerSelection.innerHTML = getComputerSelectionImage();       
        roundResult.textContent = "";
        roundResult2.textContent = "";
        userScoreboard.textContent = "";
        computerScoreboard.textContent = "";

    function getUserSelectionImage () {
        if (userInput === "Rock") {
            return "<img src=rps-rock.png width = 180 height = 180>";
        } else if
        (userInput === "Paper") {
            return "<img src=rps-paper.png width = 180 height = 180>";
        } else if
        (userInput === "Scissors") {
            return "<img src=rps-scissors.png width = 180 height = 180>";
        }
    }
    
    
    function getComputerSelectionImage () {
        if (computerMove === "Rock") {
            return "<img src=rps-rock.png width = 180 height = 180>";
        } else if
        (computerMove === "Paper") {
            return "<img src=rps-paper.png width = 180 height = 180>";
        } else if
        (computerMove === "Scissors") {
            return "<img src=rps-scissors.png width = 180 height = 180>";
        }
    }
    
    if (computerMove === userInput) {
        roundResult.textContent = `Tie round!`
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
    
        } else if
    
    ((userInput === 'Rock' && computerMove === 'Scissors') || 
    (userInput === 'Scissors' && computerMove === 'Paper') || 
    (userInput === 'Paper' && computerMove === 'Rock')) {
        
        userScore++;

        roundResult.textContent =  `${userInput} beats ${computerMove}.`
        roundResult2.textContent = `You won the round!`
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
        } else if 
    
    ((computerMove === 'Rock' && userInput === 'Scissors') || 
    (computerMove === 'Scissors' && userInput === 'Paper') || 
    (computerMove === 'Paper' && userInput === 'Rock')) {
    
        computerScore++;

        roundResult.textContent = `${computerMove} beats ${userInput}.` 
        roundResult2.textContent = `Computer won the rond!`    
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
        }     
        
    if ((userScore === 5 ) && (userScore > computerScore)) {
        roundResult.textContent = `You beat the game!` 
        roundResult2.textContent = `Refresh game to play again!`    
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
        btnRock.removeEventListener("click", getRock);
        btnPaper.removeEventListener("click", getPaper);
        btnScissors.removeEventListener("click", getScissors);
        
    } else if 
        ((computerScore ===5) && (computerScore > userScore)) {
        roundResult.textContent = `You got whooped!` 
        roundResult2.textContent = `Refresh page to try again!`
        userScoreboard.textContent = `${userScore}`;
        computerScoreboard.textContent = `${computerScore}`;
        btnRock.removeEventListener("click", getRock);
        btnPaper.removeEventListener("click", getPaper);
        btnScissors.removeEventListener("click", getScissors);
        }
        
}

