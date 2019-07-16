// script.js
// JonRider

// setup grid
function setupGrid() {
  // remove previous grid elements
  removeGrid();
  color = "black";
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
      pixel.style.webkitFilter = "brightness(100%)";
  		pixel.addEventListener("mouseover", function () {
  			//pixel.classList.add("draw");
        if (rainbowOn == false) {
          pixel.style.backgroundColor = color;
        }
        else {
          pixel.style.backgroundColor = getRandomColor();
          // lower brightness by ten percent per pass
          let brightness = pixel.style.webkitFilter;
          brightness = brightness.replace(/\D/g,'');
          brightness = brightness - 10;
          pixel.style.webkitFilter = "brightness(" + brightness + "%)";
        }

  		});
  	});
}


// change the color of selected pixel
function changeColor(e) {
  e.target.classList.add('draw');
}

// https://stackoverflow.com/questions/1484506/random-color-generator#1484514
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// remove previous grid
function removeGrid() {
  let element = document.getElementById("main");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


// initial run
let color = "black";
let square = 16;
let rainbowOn = false;
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
  setupGrid();
}

// color change
// black button
black = document.getElementById("black");
black.onclick = () => {
  color = "black";
  rainbowOn = false;
}

// red button
red = document.getElementById("red");
red.onclick = () => {
  color = "red";
  rainbowOn = false;
}

// rainbow button
rainbow = document.getElementById("rainbow");
rainbow.onclick = () => {
  rainbowOn = true;
}
