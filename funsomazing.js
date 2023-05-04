// Retrieve DOM elements
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const colorModeBtn = document.getElementById("colorMode");
const rainbowModeBtn = document.getElementById("rainbowMode");
const eraseBtn = document.getElementById("erase");
const clearBtn = document.getElementById("clear");
const sizeValue = document.getElementById("sizeValue");
const sizeSlide = document.getElementById("sizeSlide");

// Set default values
let mode = "color";
let size = sizeSlide.value;
let color = colorPicker.value;

// Create the grid
createGrid(size);

// Add event listeners
grid.addEventListener("mousedown", draw);
sizeSlide.addEventListener("input", resizeGrid);
colorPicker.addEventListener("input", setColor);
colorModeBtn.addEventListener("click", setColorMode);
rainbowModeBtn.addEventListener("click", setRainbowMode);
eraseBtn.addEventListener("click", setEraseMode);
clearBtn.addEventListener("click", clearGrid);

const buttons = document.querySelectorAll('.button')
buttons.forEach(button =>{
    button.addEventListener('click', () => {
        button.classList.toggle('active')
    })
})

// Functions
function createGrid(size) {
  // Clear the grid
  grid.innerHTML = "";

  // Set the grid size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the grid cells
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }
}

function draw(e) {
  // Change the cell's color
  if (e.target.classList.contains("cell")) {
    if (mode === "color") {
      e.target.style.backgroundColor = color;
    } else if (mode === "rainbow") {
      const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      e.target.style.backgroundColor = randomColor;
    } else if (mode === "erase") {
      e.target.style.backgroundColor = "white";
    }
  }

  // Enable drawing
  grid.addEventListener("mouseover", draw);
  // Disable drawing
  grid.addEventListener("mouseup", () => {
    grid.removeEventListener("mouseover", draw);
  });
}

function resizeGrid() {
  // Update the grid size
  size = sizeSlide.value;
  sizeValue.textContent = `${size} x ${size}`;

  // Recreate the grid
  createGrid(size);
}

function setColor() {
  // Update the current color
  color = colorPicker.value;

  // Set the color mode
  mode = "color";
}

function setColorMode() {
  // Set the color mode
  mode = "color";
}

function setRainbowMode() {
  // Set the rainbow mode
  mode = "rainbow";
}

function setEraseMode() {
  // Set the erase mode
  mode = "erase";
}

function clearGrid() {
  // Reload the page
  location.reload();
}



