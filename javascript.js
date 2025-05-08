/* 

create function getComputerChoice
generate random number between 0 and 1 (x)
generate string variable y 
set y equal to rock if x is less than one third
set y equal to paper if x greater than or equal to one third but less than two thirds
otherwise set y equal to scissors
return y

*/


function getComputerChoice(){
    let x = Math.random() ;
    if (x < (1/3)) {
        let y = "rock";
        return (y) ;
    } else if 
        ((x >= (1/3)) && (x < (2/3)))
    {
        let y = "paper";
        return (y)
    } else {
        let y = "scissors";
        return (y);
         } 
    };
  
   
/*
prompt the user to input a choice(rock,paper,scissors)
return users choice
*/

function getHumanChoice(){
    let x = prompt("Rock, Paper, or Scissors");
    return (x);
};

/* 

create integer variable humanScore with inital value 0
create integer variable computerScore with initial value 0

*/ 

let humanScore = 0;
let computerScore = 0;


/*

create a playRound function
use humanChoice and computerChoice as parameters for playRound
make the humanChoice parameter case insensitive
compare human choice to computer choice to determine a winner
tell the console to log a message indicating if the user won the round (and somehow tell the user the computers output as well)

*/



/*

create playGame function
move playRound function and score variables inside the new function
play 5 rounds by calling playRound 5 times
compare user score to computer score and declare a winner

*/ 



    function playRound( humanChoice , computerChoice ){
        computerChoice = getComputerChoice();
        let resultText = document.querySelector(`.results`)
           if (humanChoice == "Rock" && computerChoice == "scissors") {
                resultText.textContent =  ("You Win! Rock beats Scissors");
                humanScore++;
            } else if(humanChoice == "Rock" && computerChoice == "paper"){
                resultText.textContent = ("You Lose! Rock loses to paper")
                computerScore++;
            } else if ( humanChoice == "Paper" && computerChoice == "rock"){
                resultText.textContent = ("You Win! Paper beats Rock");
                humanScore++;
            } else if (humanChoice == "Paper" && computerChoice == "scissors"){
                resultText.textContent = ("You Lose! Paper loses to Scissors");
                computerScore++;
            } else if (humanChoice == "Scissors" && computerChoice == "paper"){
                resultText.textContent = ("You Win! Scissors beat Paper");
                humanScore++;
            } else if (humanChoice == "Scissors" && computerChoice == "rock"){
                resultText.textContent = ("You Lose! Scissors lose to Rock");
                computerScore++;
            } else {resultText.textContent = ("Stop Copying Me!")};

            let scoreboard = document.querySelector(`.scoreboard`);
            scoreboard.textContent = (humanScore + " - " + computerScore)
            
        }
        // const humanSelection = "getHumanChoice()";
        // const computerSelection = "getComputerChoice()";
        
    /*
    
        playRound( humanSelection, computerSelection);
    if (humanScore > computerScore){
        alert(`Congrats You Won!`);
    } else if (humanScore < computerScore) {
    alert(`Ha! Loser! I win!!`)
    } else {alert("Its a Tie! Everyone Wins! (or loses)")}

    */

    let rpsButtons = document.querySelector(`.buttonDiv`);
    rpsButtons.addEventListener(`click`, (rps) => {
        if(rps.target.classList.contains(`rpsButton`)){
            let rpsButtonText = rps.target.innerText;
            console.log(rpsButtonText);
            let humanChoice = (rpsButtonText);
            playRound(humanChoice);
        }
    })

let scoreboard = document.querySelector(`.scoreboard`);
scoreboard.textContent = (humanScore + " - " + computerScore)

  
 












