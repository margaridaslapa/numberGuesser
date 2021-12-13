let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {

    return Math.floor(Math.random()*10)
}




function compareGuesses(humanGuess, computerGuess, target) {

    if (humanGuess === computerGuess) {
        return true;
    } 
    else if (getAbsoluteDistance(humanGuess, target) <= getAbsoluteDistance(computerGuess, target)) {
        return true;
    }
    else {
        return false;
    } 
}


function getAbsoluteDistance(guess, target) {
    return Math.abs(guess - target);

}


function updateScore(winner) {

    if (winner === 'human') {
     humanScore++;
    } 
    else {
    computerScore++;
    }

} 


function advanceRound() {
 currentRoundNumber++;
}



