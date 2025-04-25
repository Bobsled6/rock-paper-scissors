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
  
   console.log(getComputerChoice());
   
/*
prompt the user to input a choice(rock,paper,scissors)
return users choice
*/

function getHumanChoice(){
    let x = prompt("Rock, Paper, or Scissors");
    console.log(x);
    return (x);
};

/* 

create integer variable humanScore with inital value 0
create integer variable computerScore with initial value 0

*/ 





