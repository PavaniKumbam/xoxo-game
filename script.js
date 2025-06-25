const messageEl = document.getElementById('message');
const cells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restartBtn');
let currentPlayer = 'X';
let isGameOver = false;

const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Add click listeners to each cell
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(cell, index), { once: true });
});

restartBtn.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = ''; // reset highlight
    cell.addEventListener('click', () => handleClick(cell, [...cells].indexOf(cell)), { once: true });
  });
  currentPlayer = 'X';
  isGameOver = false;
});

function handleClick(cell, index) {
  if (isGameOver || cell.textContent !== '') return;
  cell.textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    alert(`${currentPlayer} wins! 🏆`); 
    highlightWinningCells(currentPlayer);
    isGameOver = true;
  } else if (isDraw()) {
    alert("It's a draw! 🤝");
    isGameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin(player) {
  return winCombos.some(combo => {
    return combo.every(index => cells[index].textContent === player);
  });
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function highlightWinningCells(player) {
  winCombos.forEach(combo => {
    if (combo.every(index => cells[index].textContent === player)) {
      combo.forEach(index => {
        cells[index].style.backgroundColor = '#90ee90'; // light green highlight
      });
    }
  });
}
