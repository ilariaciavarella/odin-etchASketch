const pad = document.querySelector('#pad');

let gridDim = 16;
let innerBlock;

for (let i = 0; i < gridDim; i++) {
    innerBlock = document.createElement('div');
    innerBlock.setAttribute('class', 'inner');
    pad.appendChild(innerBlock);
}

