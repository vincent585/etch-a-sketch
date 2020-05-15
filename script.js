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

createGrid();







