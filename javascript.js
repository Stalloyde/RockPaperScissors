let userScore = 0;
let computerScore = 0;

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

function playRound (userInput, computerMove) {

    if (computerMove === userInput) {
        return `
        Computer chose ${computerMove}. 
        User choice ${userInput}. 
        IT'S A TIE!

        SCOREBOARD:
        User: ${userScore}, Computer: ${computerScore}`;
    
} else if
    
    ((userInput === 'rock' && computerMove === 'scissors') || 
    (userInput === 'scissors' && computerMove === 'paper') || 
    (userInput === 'paper' && computerMove === 'rock')) {
        
        userScore++;

        return `
        Computer chose ${computerMove}. 
        User chose ${userInput}. 
        USER WINS!
            
        SCOREBOARD:
        User: ${userScore}, Computer: ${computerScore}`;
    
} else if 
    
    ((computerMove === 'rock' && userInput === 'scissors') || 
    (computerMove === 'scissors' && userInput === 'paper') || 
    (computerMove === 'paper' && userInput === 'rock')) {
    
        computerScore++;

        return `
        Computer chose ${computerMove}. 
        User chose ${userInput}. 
        COMPUTER WINS!    

        SCOREBOARD:
        User: ${userScore}, Computer: ${computerScore}`;
}
}

//assigned action to parameters of computerInput and userInput in function playRound here so that entire program runs from scratch each loop
function game () {
    for (let i=1; i < 6; i++) {
    const computerMove = getComputerMove();
    const userInput = prompt('Rock, paper or scissors?').toLowerCase();
    console.log(playRound(userInput, computerMove));
    }
}

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