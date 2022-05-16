let userScore = 0;
let computerScore = 0;

//get computer's move
function getComputerMove() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return 'rock'; 
        } else if
    (randomNumber === 1) {
        return 'paper';
        } else if
    (randomNumber === 2) {
        return 'scissors';
        }
    }


//get user's move, play a round of RPS and assign a point to winner of round
function playRound (userInput, computerMove) {

    if (computerMove === userInput) {
return `Computer chose ${computerMove}. 
User choice ${userInput}. 
IT'S A TIE!

SCOREBOARD:
User: ${userScore}, Computer: ${computerScore}`;
    
} else if
    
    ((userInput === 'rock' && computerMove === 'scissors') || 
    (userInput === 'scissors' && computerMove === 'paper') || 
    (userInput === 'paper' && computerMove === 'rock')) {
    userScore++;
return `Computer chose ${computerMove}. 
User chose ${userInput}. 
USER WINS!;

SCOREBOARD:
User: ${userScore}, Computer: ${computerScore}`;
    
} else if 
    
    ((computerMove === 'rock' && userInput === 'scissors') || 
    (computerMove === 'scissors' && userInput === 'paper') || 
    (computerMove === 'paper' && userInput === 'rock')) {
    computerScore++;
return `Computer chose ${computerMove}. 
User chose ${userInput}. 
COMPUTER WINS!;    

SCOREBOARD:
User: ${userScore}, Computer: ${computerScore}`;
}
}

//assign an action to parameters of computerInput and userInput in function playRound

//loop the function playRound() in the function of game(). Best of 5.
function game () {
    for (let i=1; i < 6; i++) {
    const computerMove = getComputerMove();
    const userInput = prompt('Rock, paper or scissors?').toLowerCase();
    console.log(playRound(userInput, computerMove));
    }
}

//Game over
function gameOver () {
    if (userScore > computerScore) {
        return `USER WINS! FINAL SCORE - USER: ${userScore}, COMPUTER: ${computerScore}`
    } else if
    (userScore < computerScore) {
        return `USER LOST! FINAL SCORE - USER: ${userScore}, COMPUTER: ${computerScore}`
    } else if
    (userScore === computerScore) {
    return `TIE GAME! FINAL SCORE - USER: ${userScore}, COMPUTER: ${computerScore}`
    }
}

game();
console.log(gameOver());