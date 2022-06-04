let userScore = 0;
let computerScore = 0;
const userInput = "";





//assigned action to parameters of computerInput and userInput in function playRound here so that entire program runs from scratch each loop
 function game () {
    
    document.querySelector("#btn-rock").addEventListener("click", function () {appendInputs("Rock")});
    document.querySelector("#btn-paper").addEventListener("click", function () {appendInputs("Paper")});
    document.querySelector("#btn-scissors").addEventListener("click", function () {appendInputs("Scissors")});
    
    function appendInputs (userInput) {

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
            const userContainer = document.querySelector(".user-input");
            const userNewDiv = document.createElement("div");
            const pcContainer = document.querySelector(".computer-input");
            const pcNewDiv = document.createElement("div");
            const roundResultContainer = document.querySelector(".round-result")
            const roundResultDiv = document.createElement("div");    
            const scoreboardUserContainer = document.querySelector(".scoreboard-user");
            const scoreboardUserDiv = document.createElement("div");
            const scoreboardComputerContainer = document.querySelector(".scoreboard-computer");
            const scoreboardComputerDiv = document.createElement("div");


            userNewDiv.classList.add("user-input");
            userNewDiv.textContent = userInput;
            userContainer.appendChild(userNewDiv);
            
            pcNewDiv.classList.add("computer-input");
            pcNewDiv.textContent = computerMove;
            pcContainer.appendChild(pcNewDiv);


            roundResultDiv.classList.add("round-result");
            roundResultDiv.textContent = "";
            roundResultContainer.appendChild(roundResultDiv);

            scoreboardUserDiv.classList.add("scoreboard-user");
            scoreboardUserDiv.textContent = " ";
            scoreboardUserContainer.appendChild(scoreboardUserDiv);

            scoreboardComputerDiv.classList.add("scoreboard-computer");
            scoreboardComputerDiv.textContent = " ";
            scoreboardComputerContainer.appendChild(scoreboardComputerDiv);


            if (computerMove === userInput) {
                roundResultDiv.textContent = `IT'S A TIE!`
                scoreboardUserDiv.textContent = `${userScore}`;
                scoreboardComputerDiv.textContent = `${computerScore}`;
            
                } else if
            
            ((userInput === 'Rock' && computerMove === 'Scissors') || 
            (userInput === 'Scissors' && computerMove === 'Paper') || 
            (userInput === 'Paper' && computerMove === 'Rock')) {
                
                userScore++;
        
                roundResultDiv.textContent =  `YOU WIN!`
                scoreboardUserDiv.textContent = `${userScore}`;
                scoreboardComputerDiv.textContent = `${computerScore}`;

                } else if 
            
            ((computerMove === 'Rock' && userInput === 'Scissors') || 
            (computerMove === 'Scissors' && userInput === 'Paper') || 
            (computerMove === 'Paper' && userInput === 'Rock')) {
            
                computerScore++;
        
                roundResultDiv.textContent = `COMPUTER WINS!`    
                scoreboardUserDiv.textContent = `${userScore}`;
                scoreboardComputerDiv.textContent = `${computerScore}`;}
            
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

// refactor append to replace
// end game. afer score === 5 .. trigger play again button or prompt ... something else other than alert function


game();