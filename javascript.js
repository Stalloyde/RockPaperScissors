let userScore = 0;
let computerScore = 0;
const userInput = "";





//assigned action to parameters of computerInput and userInput in function playRound here so that entire program runs from scratch each loop
 function game () {
    
    document.querySelector("#btn-rock").addEventListener("click", function () {displayInputs("Rock")});
    document.querySelector("#btn-paper").addEventListener("click", function () {displayInputs("Paper")});
    document.querySelector("#btn-scissors").addEventListener("click", function () {displayInputs("Scissors")});
    
    function displayInputs (userInput) {

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
                computerScoreboard.textContent = `${computerScore}`;}
            
            function gameOver () {
                if (userScore === 5) {
                    return scoreboardDiv.textContent = `YOU BEAT THE GAME! FINAL SCORE - User: ${userScore}, Computer: ${computerScore}`;
                    } else if
                (computerScore === 5) {
                    return scoreboardDiv.textContent = `YOU GOT WHOOPED! FINAL SCORE - User: ${userScore}, Computer: ${computerScore}`;
                }
            }
    }
}

// end game. afer score === 5 .. trigger play again button or prompt ... something else other than alert function


game();