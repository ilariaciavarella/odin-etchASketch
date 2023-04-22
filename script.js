const pad = document.querySelector('#pad');

let gridSize = 16;

for(let i = 0; i < gridSize; i++) {
    const singleRow = document.createElement('div');
    singleRow.setAttribute('class', 'singleRow');
    for (let j = 0; j < gridSize; j++) {
        const squares = document.createElement('div');
        squares.setAttribute('class', 'singleSq');
        singleRow.appendChild(squares);
    }
    pad.appendChild(singleRow);
}