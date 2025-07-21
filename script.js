const DEFAULT_GRID_SIZE = 4;
const MAX_GRID_SIZE = 100;
const colours = [
  "Red", "Green", "Blue", "Yellow", "Orange",
  "Purple", "Pink", "Brown", "Gray", "Turquoise"
];

const containerDivEle = document.querySelector(".containerDiv");
const sizeButtonEle = document.querySelector(".size-button");
const resetButtonEle = document.querySelector(".reset-button");

let gridRow = DEFAULT_GRID_SIZE;

function createGrid(size) {
  containerDivEle.innerHTML = '';

  for (let j = 0; j < size; j++) {
    const newRow = document.createElement("div");
    newRow.classList.add("newDiv");

    for (let i = 0; i < size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("gridDiv");

      cell.addEventListener("mouseenter", () => {
        const currentOpacity = parseFloat(cell.style.opacity) || 1;
        cell.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        cell.style.opacity = Math.max(currentOpacity - 0.1, 0);
      });

      newRow.appendChild(cell);
    }

    containerDivEle.appendChild(newRow);
  }
}

function promptGridSize() {
  const input = prompt("Enter Number of Rows/Columns (max 100)", "16");

  if (input !== null) {
    const size = parseInt(input, 10);
    if (!Number.isNaN(size) && size > 0 && size <= MAX_GRID_SIZE) {
      gridRow = size;
      createGrid(gridRow);
    } else {
      alert("⚠️ Enter a valid number between 1 and 100!");
    }
  }
}

sizeButtonEle.addEventListener("click", promptGridSize);
resetButtonEle.addEventListener("click", () => createGrid(gridRow));

// Create default grid on load
createGrid(gridRow);