// script.js
// JonRider

// setup grid
function setupGrid() {
  // remove previous grid elements
  removeGrid();

  // setup auto string with auto equal to square minus trailing whitespace
  let auto = "auto ";
  auto = auto.repeat(square);
  auto = auto.slice(0, -1);
  document.getElementById("main").style.gridTemplateColumns = auto;

  // create array of square x square grid
  for (n = 0; n < (square * square); n++) {
    var div = document.createElement("div");
    div.classList.add("pixel");

    document.getElementById("main").appendChild(div);
  }

  // set up pixels with event listeners
  pixel = document.getElementsByClassName('pixel');
  pixels = Array.from(pixel);

  	pixels.forEach(function (pixel) {
  		pixel.addEventListener("mouseover", function () {
  			pixel.classList.add("draw");
  		});
  	});
}


// change the color of selected pixel
function changeColor(e) {
  e.target.classList.add('draw');
}


// clear the grid
function clear() {
  pixel = document.getElementsByClassName('pixel');
  pixels = Array.from(pixel);

  pixels.forEach(function (pixel) {
			pixel.classList.remove("draw");
		});
}


// remove previous grid
function removeGrid() {
  let element = document.getElementById("main");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


// initial run
let square = 16;
setupGrid();

// listen for reset
reset = document.getElementById("reset");
reset.onclick = () => {
  let input = 0;
  while (input < 1 || input > 100 || isNaN(input) == true) {
    input = prompt("How many squares per side do you want the Grid? (1-100)", "16");
  }
  square = parseInt(input);
  console.log(square);
  clear();
  setupGrid();
}
