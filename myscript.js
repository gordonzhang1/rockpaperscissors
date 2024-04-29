// Step 2: 

function getComputerChoice(){
    rock = 0;
    paper = 1;
    scissors = 2;
    let randomNum = Math.floor(Math.random()*3);

    if (rock==randomNum){
        return ('rock');
    }

    else if(paper==randomNum){
        return ('paper');
    }

    else{
        return ('scissors');
    }

}


let humanScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
function displayWinner(winningMessage){
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = winningMessage;
    container.appendChild(content);
}
// making a function that can display it
function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'rock') && (computerChoice == 'paper')){
        computerScore++;
        displayWinner('You lose! Paper beats rock');
        displayComputerScore();
        
            } 
        
    else if ((humanChoice == 'paper') && (computerChoice == 'rock')){
        humanScore++;
        displayWinner('You Win! Rock beats Paper');
        displayHumanScore();
            }
        
    else if ((humanChoice == 'scissors') && (computerChoice == 'rock')){
        computerScore++;
        displayWinner('You Lose! Rock Beats Scissors');
        displayComputerScore();

            }
        
    else if ((humanChoice == 'rock') && (computerChoice == 'scissors')){
        humanScore++;
        displayWinner('You win! Rock Beats Scissors');
        displayHumanScore();

            }
        
    else if ((humanChoice == 'paper') && (computerChoice == 'scissors')){
        computerScore++;
        displayWinner('You Lose! scissors beats paper');
        displayComputerScore();
            
            }
        
    else if ((humanChoice == 'scissors') && (computerChoice == 'paper')){
        humanScore++;
        displayWinner('You Win! Scissors beats paper');
        displayHumanScore();

            }
        
        }
    
    

//Rock Button 
const rockButton = document.querySelector('#rock');
rockButton.addEventListener("click",
    function runRock(){
        const computerSelection = getComputerChoice();
        playRound('rock', computerSelection);
    }
)


//Paper Button
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click',
    function runPaper(){
        const computerSelection = getComputerChoice();
        playRound('paper', computerSelection);
    }



)

//Scissor button
const scissorButton = document.querySelector('#scissor');
scissorButton.addEventListener('click',
    function runScissor(){
        const computerSelection = getComputerChoice();
        playRound('scissors', computerSelection);
    }

)


function displayHumanScore(){
    const scoreContainer = document.querySelector('#humanScoreContainer');
    const scoreContext = document.createElement('div');
    scoreContext.classList.add('scoreContext');
    scoreContext.textContent = humanScore;
    scoreContainer.appendChild(scoreContext);

}

function displayComputerScore(){
    const computerContainer = document.querySelector('#computerScoreContainer');
    const compcontext = document.createElement('div');
    compcontext.classList.add('compcontext');
    compcontext.textContent = computerScore;
    computerContainer.appendChild(compcontext);
}