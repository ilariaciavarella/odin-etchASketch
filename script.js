const pad = document.querySelector("#pad");

const rainbowBtn = document.querySelector('#rainbowBtn');
const blackBtn = document.querySelector('#blackBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');

// Create and delete grid
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const singleRow = document.createElement("div");
        singleRow.setAttribute("class", "singleRow");
        for (let j = 0; j < gridSize; j++) {
            const squares = document.createElement("div");
            squares.setAttribute("class", "singleSq");
            singleRow.appendChild(squares);
        }
        pad.appendChild(singleRow);
    }
}

function deleteGrid() {
    const singleRow = document.querySelectorAll(".singleRow");
    const squares = document.querySelectorAll(".singleSq");
    squares.forEach(square => square.remove());
    singleRow.forEach(row => row.remove());
}

let defaultGrid = createGrid(16);

//Generate random color
function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}

// Set hover effect
let singleSq = document.querySelectorAll(".singleSq");

// RAINBOW BUTTON
let rainbowCounter = 0;

function useRainbow(e) {
    e.target.setAttribute("style", `background-color: rgb(${getRandomColor()});`);
}

rainbowBtn.addEventListener('click', () => {
    rainbowCounter++;
    console.log(`Rainbow Counter: ${rainbowCounter}`);
});

rainbowBtn.addEventListener('click', () => {
    if (rainbowCounter % 2 !== 0) {
        singleSq.forEach((square) => square.addEventListener("mouseover", useRainbow, { once: true }));
    } else if (rainbowCounter % 2 === 0) {
        singleSq.forEach((square) => square.removeEventListener("mouseover", useRainbow));
    };

});
rainbowBtn.addEventListener('click', () => {
    if (rainbowCounter % 2 !== 0) {
        blackBtn.classList.remove('clicked');
        rainbowBtn.classList.add('clicked');
        eraserBtn.classList.remove('clicked');
    } else {
        rainbowBtn.classList.remove('clicked');
    }
});

// BLACK BUTTON
let blackCounter = 0;

function useBlack(e) {
    e.target.setAttribute('style', 'background-color: black;');
}

blackBtn.addEventListener('click', () => {
    blackCounter++;
    console.log(`Black Counter: ${blackCounter}`);
});

blackBtn.addEventListener('click', () => {
    if (blackCounter % 2 !== 0) {
        singleSq.forEach((square) => square.addEventListener("mouseover", useBlack, { once: true }));
    } else if (blackCounter % 2 === 0) {
        singleSq.forEach((square) => square.removeEventListener("mouseover", useBlack));
    };
});
blackBtn.addEventListener('click', () => {
    if (blackCounter % 2 !== 0) {
        blackBtn.classList.add('clicked');
        rainbowBtn.classList.remove('clicked');
        eraserBtn.classList.remove('clicked');
    } else {
        blackBtn.classList.remove('clicked');
    }
});

// ERASER BUTTON
let eraserCounter = 0;

function useEraser(e) {
    e.target.setAttribute('style', 'background-color: rgb(245, 245, 245);')
}

eraserBtn.addEventListener('click', () => {
    eraserCounter++;
    console.log(`Eraser Counter: ${eraserCounter}`);
});

eraserBtn.addEventListener('click', () => {
    if (eraserCounter % 2 !== 0) {
        singleSq.forEach((square) => square.addEventListener("mouseover", useEraser, { once: true }));
    } else if (eraserCounter % 2 === 0) {
        singleSq.forEach((square) => square.removeEventListener("mouseover", useEraser));
    };
});
eraserBtn.addEventListener('click', () => {
    if (eraserCounter % 2 !== 0) {
        eraserBtn.classList.add('clicked');
        rainbowBtn.classList.remove('clicked');
        blackBtn.classList.remove('clicked');
    } else {
        eraserBtn.classList.remove('clicked');
    }
});

// SIZE BUTTON
function resetButtons() {
    rainbowCounter = 0;
    blackCounter = 0;
    eraserCounter = 0;
    eraserBtn.classList.remove('clicked');
    rainbowBtn.classList.remove('clicked');
    blackBtn.classList.remove('clicked');
}

sizeBtn.addEventListener('click', () => {
    let newSize = prompt("Set your new grid size: pick a number between 1 and 100", "");
    if (newSize > 0 && newSize < 101) {
        deleteGrid();
        createGrid(newSize);
        resetButtons();
        singleSq = document.querySelectorAll(".singleSq");
    } else {
        alert('What you inserted is not valid. Please, try again.');
    }
});

// CLEAR BUTTON
clearBtn.addEventListener('click', () => {
    singleSq.forEach(square => square.setAttribute('style', 'background-color: rgb(245, 245, 245);'));
    singleSq.forEach((square) => square.removeEventListener("mouseover", useRainbow));
    singleSq.forEach((square) => square.removeEventListener("mouseover", useBlack));
    singleSq.forEach((square) => square.removeEventListener("mouseover", useEraser));
    resetButtons();
});