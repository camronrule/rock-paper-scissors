
//randomly returns either rock, paper, or scissors
//as strings. 
function getComputerChoice(){
    let output = Math.floor(Math.random()*3);
    switch (output){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

//plays one round
//takes in user input and random computer input
//returns a string of who won
function playRound(playerSelection, computerSelection){
    const playerSelection_fixed = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    switch (playerSelection_fixed){
        case 'Rock':
            if (computerSelection == 'Rock') return 'A tie! The computer also chose Rock';
            else if (computerSelection == 'Scissors') return 'You win! Rock beats Scissors';
            else if (computerSelection == 'Paper') return 'You Lose! Paper beats Rock'

        case 'Scissors':
            if (computerSelection == 'Rock') return 'You lose! Rock beats Scissors';
            else if (computerSelection == 'Scissors') return 'A tie! The computer also chose Scissors';
            else if (computerSelection == 'Paper') return 'You win! Scissors beats Paper';

        case 'Paper':
            if (computerSelection == 'Rock') return 'You win! Paper beats Rock';
            else if (computerSelection == 'Scissors') return 'You lose! Scissors beats Paper';
            else if (computerSelection == 'Paper') return 'A tie! The computer also chose Paper';
    }
}

function game() {
    let computerPoints, playerPoints;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Welcome to the game! Please choose between Rock, Paper, and Scissors.')
        const gameResult = playRound(playerSelection, getComputerChoice());

        if (gameResult.includes('lose')) computerPoints++;
        else if (gameResult.includes('win')) playerPoints++;

        console.log(gameResult);
    }
    if (playerPoints > computerPoints){
        console.log('Great job! You won!');
    }
    else {
        console.log("Nice try! You'll get em next time.");
    }
}