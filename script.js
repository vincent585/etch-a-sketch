const container = document.querySelector('#container');
const root = document.documentElement;
const resetBtn = document.querySelector('#reset-button');
const rainbowBtn = document.querySelector('#rainbow-button');
const blackBtn = document.querySelector('#black-button');



function createGrid(size = 16) {
    root.style.setProperty('--columns', size);
    root.style.setProperty('--rows', size);

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        container.appendChild(gridCell);

        gridCell.addEventListener('mouseenter', colorCell);
    } 
}

function colorCell(event) {
    let target = event.target;
    if (!target.classList.contains('grid-cell')) {
        return;
    } else {
        target.classList.add('colored-cell');
    }
}

function colorCellRainbow() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            cell.classList.add('rainbow-cell');
            cell.style.setProperty('--rainbow', getRandomColor());
        });
    });
}

function colorCellBlack() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.classList.add('colored-cell');
    }))
}

function getRandomColor() {
    let values = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * values.length)];
    }
    return color;
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let newGridSize = parseInt(prompt('Please enter your desired grid dimensions'));
    if (newGridSize <= 0 || isNaN(newGridSize)) {
        alert('Please enter valid grid dimensions.');
    } else {
        createGrid(newGridSize);
    }
}

createGrid();


resetBtn.addEventListener('click', resetGrid);
rainbowBtn.addEventListener('click', colorCellRainbow);
blackBtn.addEventListener('click', colorCellBlack);








