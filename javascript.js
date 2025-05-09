
function getComputerChoice(){
    let x = Math.random() ;
    if (x < (1/3)) {
        let y = "rock";
        return (y) ;
}   else if 
        ((x >= (1/3)) && (x < (2/3)))
{
        let y = "paper";
        return (y)
}   else {
        let y = "scissors";
        return (y);
} };

let humanScore = 0;
let computerScore = 0;




function playRound( humanChoice , computerChoice ){
    computerChoice = getComputerChoice();
        let resultText = document.querySelector(`.results`)
           if (humanChoice == "Rock" && computerChoice == "scissors") {
                resultText.textContent =  ("Round Won! Rock beat Scissors");
                humanScore++;
            } else if(humanChoice == "Rock" && computerChoice == "paper"){
                resultText.textContent = ("Round Lost! Rock lost to paper")
                computerScore++;
            } else if ( humanChoice == "Paper" && computerChoice == "rock"){
                resultText.textContent = ("Round Won! Paper beat Rock");
                humanScore++;
            } else if (humanChoice == "Paper" && computerChoice == "scissors"){
                resultText.textContent = ("Round Lost! Paper lost to Scissors");
                computerScore++;
            } else if (humanChoice == "Scissors" && computerChoice == "paper"){
                resultText.textContent = ("Round Won! Scissors beat Paper");
                humanScore++;
            } else if (humanChoice == "Scissors" && computerChoice == "rock"){
                resultText.textContent = ("Round Lost! Scissors lost to Rock");
                computerScore++;
            } else {resultText.textContent = ("Stop Copying Me!")};

            let scoreboard = document.querySelector(`.scoreboard`);
            scoreboard.textContent = (humanScore + " - " + computerScore);
            
            if(computerScore == 5){
                resultText.textContent = ("Game Lost, Final Score: " + humanScore + " - 5 ");
                humanScore = 0;
                computerScore = 0;
                scoreboard.textContent = (humanScore + " - " + computerScore);
            };
            if(humanScore == 5){
                resultText.textContent = ("Game Won! Final Score: " + humanScore + " -  " + computerScore);
                humanScore = 0;
                computerScore = 0;
                scoreboard.textContent = (humanScore + " - " + computerScore);
            }
            
        }


    let rpsButtons = document.querySelector(`.buttonDiv`);
    rpsButtons.addEventListener(`click`, (rps) => {
        if(rps.target.classList.contains(`rpsButton`)){
            let rpsButtonText = rps.target.innerText;
            let humanChoice = (rpsButtonText);
            playRound(humanChoice);
        }
    })

let scoreboard = document.querySelector(`.scoreboard`);
scoreboard.textContent = (humanScore + " to " + computerScore);
















