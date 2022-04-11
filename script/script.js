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

    celulas.forEach(celula => {
        celula.classList.remove(xClass);
        celula.classList.remove(oClass);
        borda.classList.replace('o', 'x');


        celula.addEventListener('click', handleClick, {once: true})
    })

    restartButton.addEventListener('click', startGame);
    document.querySelector('main').classList.remove('end');
}

function handleClick(e) {
    let celula = e.target;
    let turnClass = xTurn ? xClass : oClass;

    placeMark(celula, turnClass)
}

function placeMark(celula, turnClass) {
    celula.classList.add(turnClass);
}