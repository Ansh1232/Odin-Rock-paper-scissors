const rockbtn=document.querySelector("#rock");
const paperbtn=document.querySelector("#paper");
const scibtn=document.querySelector("#scissor");
rockbtn.addEventListener("click",playRound)
paperbtn.addEventListener("click",playRound)
scibtn.addEventListener("click",playRound)
const list=document.querySelector(".list");

let userScore=computerScore=0;
function playRound(e,getComputerChoice){
   let userChoice=e.target.id;
   
    let a=Math.random()*15;
    let choice;
    if(a<=5){
        
        choice="rock";
    }
    else if(a>5&&a<=10){
        choice= "paper"
    }
    else{
        choice="scissor";
    }
    
    
    
    
    
    
    if (userChoice==choice) {
        
        console.log("Oops! Its's a Tie"); 
        console.log(`Computer Chose:${choice} You Chose:${userChoice}`);
        console.log(`Current Score Computer :${computerScore} User:${userScore}`);

        return ;
    }

    if(choice=="rock"&&userChoice=="scissor")
    {
       
            computerScore++;
            if(userScore==5){
                console.log("You won");
                return;
            }
            if(computerScore==5){
                console.log("Computer won");
                return;
            }
            
        }
        else if(userChoice=="paper"&&choice=="rock"){
            userScore++;
            console.log("You Scored!");
            console.log(`Computer Chose:${choice} You Chose:${userChoice}`);
                if(userScore==5){
                console.log("You won");
                return;
            }
            if(computerScore==5){
                console.log("Computer won");
                return;
            }
            
        }


    else if(choice=="paper"&&userChoice=="rock")
        {
           
            computerScore++;
            console.log("You lose!");
            console.log(`Computer Chose:${choice} You Chose:${userChoice}`);
            

    }
    
    else
    if (userChoice=="scissor"&&choice=="paper") {
            userScore++;
            console.log("You scored!");
            console.log(`Computer Chose:${choice} You Chose:${userChoice}`);
    }
        


    else if(choice=="scissor"&&userChoice=="paper"){
        
                computerScore++;
                console.log("You lose");
                console.log(`Computer Chose:${choice} You Chose:${userChoice}`);
    }
            
            
            else
          if (userChoice=="rock"&&choice=="scissor") {
            userScore++;
            console.log("You Scored!");
        console.log(`Computer Chose:${choice} You Chose:${userChoice}`);
        }
               if(userScore==5){
                console.log("You won");
                    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scibtn.disabled = true;


                
                return;

            }
            if(computerScore==5){
                console.log("Computer won");
                    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scibtn.disabled = true;


                return;
            }

        let scores=document.createElement("li");
    scores.textContent=`${userChoice} and ${choice}`;

    list.appendChild(scores);

}


