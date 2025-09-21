const boardElement = document.querySelector('.game-board');
const currentPlayerSpan = document.getElementById('current-player');
const playerXScore = document.getElementById('player-x');
const playerOScore = document.getElementById('player-o');
const tiesScore = document.getElementById('ties');
const resetBtn = document.getElementById('reset-btn');
const playerModeBtn = document.getElementById('player-mode');
const computerModeBtn = document.getElementById('computer-mode');
const modal = document.getElementById('result-modal');
const resultText = document.getElementById('result-text');
const playAgainBtn = document.getElementById('play-again');
const closeModal = document.querySelector('.close');

let board, currentPlayer, gameActive, scores, mode;

function initGame() {
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    mode = playerModeBtn.classList.contains('active') ? 'pvp' : 'pvc';
    updateBoard();
    updateInfo();
}

function updateBoard() {
    boardElement.innerHTML = '';
    board.forEach((cell, idx) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.dataset.index = idx;
        cellDiv.textContent = cell;
        if (!cell && gameActive && (mode === 'pvp' || (mode === 'pvc' && currentPlayer === 'X'))) {
            cellDiv.addEventListener('click', handleCellClick);
        }
        boardElement.appendChild(cellDiv);
    });
}

function updateInfo() {
    currentPlayerSpan.textContent = `Player ${currentPlayer}'s turn`;
    playerXScore.textContent = `X: ${scores.X}`;
    playerOScore.textContent = `O: ${scores.O}`;
    tiesScore.textContent = `Ties: ${scores.T}`;
}

function handleCellClick(e) {
    const idx = +e.target.dataset.index;
    if (!board[idx] && gameActive) {
        board[idx] = currentPlayer;
        updateBoard();
        const winner = checkWinner();
        if (winner) {
            endGame(winner);
        } else if (board.every(cell => cell)) {
            endGame('T');
        } else {
            switchPlayer();
            updateInfo();
            if (mode === 'pvc' && currentPlayer === 'O' && gameActive) {
                setTimeout(computerMove, 400);
            }
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (let combo of wins) {
        const [a,b,c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            highlightWinner(combo);
            return board[a];
        }
    }
    return null;
}

function highlightWinner(combo) {
    combo.forEach(idx => {
        boardElement.children[idx].classList.add('winner');
    });
}

function endGame(winner) {
    gameActive = false;
    if (winner === 'T') {
        scores.T++;
        resultText.textContent = "It's a Tie!";
    } else {
        scores[winner]++;
        resultText.textContent = `Player ${winner} Wins!`;
    }
    updateInfo();
    setTimeout(() => showModal(), 700);
}

function showModal() {
    modal.classList.add('show');
}

function hideModal() {
    modal.classList.remove('show');
    initGame();
}

function computerMove() {
    // Simple AI: random empty cell
    let empty = board.map((v,i) => v ? null : i).filter(v => v !== null);
    if (empty.length === 0) return;
    let idx = empty[Math.floor(Math.random() * empty.length)];
    board[idx] = 'O';
    updateBoard();
    const winner = checkWinner();
    if (winner) {
        endGame(winner);
    } else if (board.every(cell => cell)) {
        endGame('T');
    } else {
        switchPlayer();
        updateInfo();
    }
}

resetBtn.addEventListener('click', () => {
    scores = { X: 0, O: 0, T: 0 };
    initGame();
});

playerModeBtn.addEventListener('click', () => {
    playerModeBtn.classList.add('active');
    computerModeBtn.classList.remove('active');
    scores = { X: 0, O: 0, T: 0 };
    initGame();
});

computerModeBtn.addEventListener('click', () => {
    computerModeBtn.classList.add('active');
    playerModeBtn.classList.remove('active');
    scores = { X: 0, O: 0, T: 0 };
    initGame();
});

playAgainBtn.addEventListener('click', hideModal);
closeModal.addEventListener('click', hideModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
});

// Initialize scores and game on load
scores = { X: 0, O: 0, T: 0 };
initGame();