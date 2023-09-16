let computerPoints = 0;
let playerPoints = 0;



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

function updateScore(gameResult) {

    if (gameResult.includes('lose')) computerPoints++;
    else if (gameResult.includes('win')) playerPoints++;
    console.log(gameResult);
}

function gameOver(){
    console.log('GAME OVER!');

    if (playerPoints > computerPoints){ 
        // you won!!!
        console.log('WON');
    }
    else {
        //you lost!!!
        console.log('LOST');
    }
    
}

document.addEventListener('DOMContentLoaded', init, false);


function init(){
let buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            const img = button.querySelector("img");
            playerSelection = img.alt;

            const gameResult = playRound(playerSelection, getComputerChoice())
            updateScore(gameResult);

            if (playerPoints == 5 || computerPoints == 5){
                gameOver();
            }
    })
});

}

