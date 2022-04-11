const xClass = 'x';
const oClass = 'o';
let xTurn;

const celulas = document.querySelectorAll('.celulas');
const borda = document.getElementById('borda');

const gamEndMessage = document.querySelectorAll('[data-game-end-message]');

const gamEndElement = document.querySelectorAll('#gameEndElement');

const restartButton = document.querySelectorAll('#restartButton');

startGame()

function startGame() {
    xTurn = true;
    borda.classList.add('x');
}