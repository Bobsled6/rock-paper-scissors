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

function playRound( humanChoice , computerChoice ){
   humanChoice = getHumanChoice().toLowerCase();
   computerChoice = getComputerChoice();
   if (humanChoice == "rock" && computerChoice == "scissors") {
        alert ("You Win! Rock beats Scissors");
    }
}
const humanSelection = "getHumanChoice()";
const computerSelection = "getComputerChoice()";

playRound( humanSelection, computerSelection);


