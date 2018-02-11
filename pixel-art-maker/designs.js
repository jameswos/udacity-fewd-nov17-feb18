
function makeGrid() {
  const canvas = document.getElementById("pixelCanvas");
  const gridHeight = document.getElementById("inputHeight").value;
  const gridWidth = document.getElementById("inputWeight").value;
  const pixelColor = document.getElementById("colorPicker");
  canvas.innerHTML = "";
  for (let i = 0; i <= (gridHeight - 1); i++) { // Setting grid height (- 1 because it starts at 1 already)
    const row = canvas.insertRow(i);
    for (let j = 0; j <= (gridWidth - 1); j++) { // Setting grid width (- 1 because it starts at 1 already)
      const cell = row.insertCell(j);
      cell.onclick = () => {
        cell.style.backgroundColor = pixelColor.value; // Select color input
      };
    }
  }
};

const gridSize = document.querySelector("#sizePicker"); // When size is submitted by the user, call makeGrid()
gridSize.addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});
