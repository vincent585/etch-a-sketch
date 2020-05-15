const container = document.querySelector('#container');





function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-cell');
        container.appendChild(gridRow);
        for (let j = 1; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            container.appendChild(gridCell);
        }
    } 
}

createGrid(16);