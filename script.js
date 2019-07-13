function changeColor(e) {
  e.target.classList.add('draw');
  console.log(e.target);
}

function clear() {
  pixel = document.getElementsByClassName('pixel');
  pixels = Array.from(pixel);

  pixels.forEach(function (pixel) {
			pixel.classList.remove("draw");
      console.log("Reset complete.")
		});
}

// create array of 16x16 grid
for (n = 0; n < 256; n++) {
  var div = document.createElement("div");
  div.classList.add("pixel");

  div.id = "div-" + n;

  document.getElementById("main").appendChild(div);
}

// set up pixesl with event listeners
pixel = document.getElementsByClassName('pixel');
pixels = Array.from(pixel);

	pixels.forEach(function (pixel) {
		pixel.addEventListener("mouseover", function () {
			pixel.classList.add("draw");
      console.log(pixel);
		});
	});

reset = document.getElementById("reset");
reset.onclick = () => clear();
