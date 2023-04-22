const pad = document.querySelector("#pad");

const rainbowBtn = document.querySelector('#rainbowBtn');
const blackBtn = document.querySelector('#blackBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const clearBtn = document.querySelector('#clearBtn');

// Create grid
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

createGrid(16);

//Generate random color
function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

// Set hover effect
const singleSq = document.querySelectorAll(".singleSq");

// Make buttons clickable
function useBlack() {
    singleSq.forEach(square => square.addEventListener('mouseover', () => {square.setAttribute('style', 'background-color: black;')}))
}

blackBtn.addEventListener('click', useBlack);
blackBtn.addEventListener('click', () => {
    blackBtn.classList.add('clicked');
    rainbowBtn.classList.remove('clicked');
    eraserBtn.classList.remove('clicked');
});

function useRainbow() {
    singleSq.forEach((square) =>
    square.addEventListener(
        "mouseover",
        () => {
            square.setAttribute("style", `background-color: rgb(${getRandomColor()});`);
        }
        )
        );
    }
    
rainbowBtn.addEventListener('click', useRainbow);
rainbowBtn.addEventListener('click', () => {
    blackBtn.classList.remove('clicked');
    rainbowBtn.classList.add('clicked');
    eraserBtn.classList.remove('clicked');
});

function useEraser() {
    singleSq.forEach(square => square.addEventListener('mouseover', () => { square.setAttribute('style', 'background-color: rgb(245, 245, 245);') }))
}

eraserBtn.addEventListener('click', useEraser);
eraserBtn.addEventListener('click', () => {
    eraserBtn.classList.add('clicked');
    rainbowBtn.classList.remove('clicked');
    blackBtn.classList.remove('clicked');
});