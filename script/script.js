//não ta aparecendo o 'show', quando o cara ganha a partida, consertar

const xClass = 'x';
const oClass = 'o';
let xTurn;

const celulas = document.querySelectorAll('.celulas');
const borda = document.getElementById('borda');

const gameEndMessage = document.querySelectorAll('[data-game-end-message]');

const gameEndElement = document.getElementById('gameEndElement');

const restartButton = document.getElementById('restartButton');


//lista de possíveis vitórias
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    
]

//para iniciar o jogo
startGame()

//função para iniciar
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
    gameEndElement.classList.remove('show');
    document.querySelector('main').classList.remove('end');
}

function handleClick(e) {
    let celula = e.target;
    let classeTurno = xTurn ? xClass : oClass;

    placeMark(celula, classeTurno)

    if(verifSeVenceu(classeTurno)){
        endGame(false);
    } else if (verifSeEmpate()) {
        endGame(true);
    }

    trocarTurnos();
    trocandoHover();
}

function placeMark(celula, classeTurno) {
    celula.classList.add(classeTurno);
}

function trocarTurnos() {
    xTurn =! xTurn;
}

function trocandoHover() {
    xTurn ? borda.classList.replace('o', 'x') : borda.classList.replace('x', 'o')
}

function verifSeVenceu(classeTurno) {
    return lines.some(line => {
        return line.every(index => {
            return celulas[index].classList.contains(classeTurno)
        })
    })
}

function verifSeEmpate() {
    return [...celulas].every(celula => {
        return celula.classList.contains(xClass)  || celula.classList.contains(oClass) 
    })
}

function endGame(empate) {
    if(empate) {
        gameEndMessage.innerText = "Empate!!!!";
    } else {
        gameEndMessage.innerText = `${xTurn ? "X's" : "O's"} venceu!!`;
    }

    gameEndElement.classList.add('show');
    document.querySelector('main').classList.add('end');
}