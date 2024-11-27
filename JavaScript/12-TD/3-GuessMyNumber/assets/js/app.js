const container = document.querySelector('.container');
const numberElement = document.querySelector('.number');
const guestInput = document.querySelector('.guess');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score span');
const highScoreElement = document.querySelector('.highscore span');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);
let score = 10;
let highScore = 0;

//Affichage du message

function displayMessage(message) {
    messageElement.textContent = message;
}

//Vérification du nombre

function checkGuess() {
    const guess = Number(guestInput.value);
    
    if (!guess || guess < 1 || guess > 10) {
        displayMessage('Veuillez entrer un nombre entre 1 et 10');

    } else if (guess === secretNumber) { 
        displayMessage('Bravo ! Vous avez trouvé le nombre !');
        numberElement.textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
        } 

    } else {

        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Trop haut ' : 'Trop bas ');
            score--;
            scoreElement.textContent = score;
        } else {
            displayMessage('Vous avez perdu !');
            scoreElement.textContent = 0;
        }
    }
}

function resetGame() {
    score = 10;
    secretNumber = Math.floor(Math.random() * 10) + 1;
    displayMessage('Commencez à deviner à nouveau...');
    scoreElement.textContent = score;
    numberElement.textContent = "?";
    guestInput.value = '';
}

checkButton.addEventListener('click', checkGuess);
againButton.addEventListener('click', resetGame);
