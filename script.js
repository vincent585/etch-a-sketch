const container = document.querySelector('#container');
const root = document.documentElement;
const resetBtn = document.querySelector('#reset-button');



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



resetBtn.addEventListener('click', resetGrid);

createGrid();







