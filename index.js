const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector('#result');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score')
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerChoice())
        resultEl.textContent = result;
    });
});

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! (${playerSelection});`
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'rock' && computerSelection === 'lizard') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'spock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'lizard') ||
        (playerSelection === 'lizard' && computerSelection === 'spock') ||
        (playerSelection === 'lizard' && computerSelection === 'paper') ||
        (playerSelection === 'spock' && computerSelection === 'scissors') ||
        (playerSelection === 'spock' && computerSelection === 'rock')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return `You win! (${playerSelection} beats ${computerSelection})`;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return `You lose! (${computerSelection} beats ${playerSelection})`;
    }
}