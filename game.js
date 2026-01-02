let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#comp-score");
const genCompChoice = () => {
    let options= ["rock","paper","scissor"]
    // rock , paper, scissor
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}
const drawGame = ()=> {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor= "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
       console.log("you win!");
       msg.innerText= `You Win! your  ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
       userScore++
       userScorePara.innerText = userScore;
    }
    else{
        console.log("you lose");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
        compScore++
        compScorePara.innerText= compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock") {
            // scissor, paper
           userWin= compChoice == "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // scissor, rock
            userWin= compChoice == "scissor" ? false: true;
        }
        else {
            // paper, rock
            userWin = compChoice == "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});