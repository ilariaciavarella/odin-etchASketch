const pad = document.querySelector("#pad");

let gridSize = prompt('Choose a size between 1 and 100', '');

// Create grid
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

//Generate random color
function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

// Set hover effect
const singleSq = document.querySelectorAll(".singleSq");
//singleSq.forEach(square => square.addEventListener('mouseover', () => {square.setAttribute('style', 'background-color: black;')}))
singleSq.forEach((square) =>
  square.addEventListener(
    "mouseover",
    () => {
      square.setAttribute("style", `background-color: rgb(${getRandomColor()});`);
    },
    { once: true }
  )
);
