function getComputerChoice(){
    let a=Math.random()*15;
    let choice;
    if(a<=5){
        
        choice="Rock";
    }
    else if(a>5&&a<=10){
        choice= "Paper"
    }
    else{
        choice="Scissors";
    }
   
    return choice;
}

function getHumanChoice(){
    let a=prompt("Rock || Paper || Scissors");
    return a;
}


function playground(userChoice,compChoice){
    //Tie Condition
    if (userChoice==compChoice) {
        
        console.log("Oops! Its's a Tie"); 
        console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
        return ;
    }

    if(compChoice=="ROCK"&&userChoice=="SCISSORS")
    {
       
            computerScore++;
            console.log("You lose!");
            console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
            
        }
        else if(userChoice=="PAPER"&&compChoice=="ROCK"){
            humanScore++;
            console.log("You Scored!");
            console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
            
        }
    




    else if(compChoice=="PAPER"&&userChoice=="ROCK")
        {
           
            computerScore++;
            console.log("You lose!");
            console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
            

    }
    
    else
    if (userChoice=="SCISSORS"&&compChoice=="PAPER") {
            humanScore++;
            console.log("You scored!");
            console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
    }
        


    else if(compChoice=="SCISSORS"&&userChoice=="PAPER"){
        
                computerScore++;
                console.log("You lose");
                console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
    }
            
            
            else
          if (userChoice=="ROCK"&&compChoice=="SCISSORS") {
            humanScore++;
            console.log("You Scored!");
        console.log(`Computer Chose:${compChoice} You Chose:${userChoice}`);
        }

}
let userChoice;
let compChoice=getComputerChoice().toUpperCase();
let humanScore=0;
let computerScore=0;

playground(userChoice=getHumanChoice().toUpperCase(),compChoice);
playground(userChoice=getHumanChoice().toUpperCase(),compChoice);
playground(userChoice=getHumanChoice().toUpperCase(),compChoice);
console.log(`humanScore:${humanScore} Computer Score:${computerScore}`);



