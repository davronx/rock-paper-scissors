const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector('#result');
const playerScoreEl = document.getElementById('player-1-score');
const computerScoreEl = document.getElementById('player-2-score')
let playerScore = 0;
let computerScore = 0;

const winningConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerChoice())
        resultEl.textContent = result;
    });
});

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getAction(winner, loser) {
    const actions = {
        rock: { scissors: 'crushes', lizard: 'crushes' },
        paper: { rock: 'covers', spock: 'disproves' },
        scissors: { paper: 'cuts', lizard: 'decapitates' },
        lizard: { paper: 'eats', spock: 'poisons' },
        spock: { scissors: 'smashes', rock: 'vaporizes' }
    };
    return actions[winner][loser] || 'unknown';
}

function playRound(playerSelection, computerSelection) {
    let action = '';

    switch (true) {
        case (playerSelection === computerSelection):
            return `It's a tie! (${playerSelection})`;
        
        case winningConditions[playerSelection].includes(computerSelection):
            action = getAction(playerSelection, computerSelection);
            playerScore++;
            playerScoreEl.textContent = playerScore;
            return `You win! (${playerSelection} ${action} ${computerSelection})`;
        
        default:
            action = getAction(computerSelection, playerSelection);
            computerScore++;
            computerScoreEl.textContent = computerScore;
            return `You lose! (${computerSelection} ${action} ${playerSelection})`;
    }
}

const themeSelect = document.getElementById('theme-select');
const themes = document.querySelectorAll('.theme');

themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    
    themes.forEach(theme => theme.style.display = 'none');
    
    document.getElementById(`${selectedTheme}-theme`).style.display = 'block';
});