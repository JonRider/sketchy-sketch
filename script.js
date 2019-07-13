function changeColor(e) {
  e.target.classList.add('draw');
  console.log(e.target);
}

// create array of 16x16 grid
for (n = 0; n < 256; n++) {
  var div = document.createElement("div");
  div.classList.add("pixel");

  div.id = "div-" + n;

  document.getElementById("main").appendChild(div);
}

pixel = document.getElementsByClassName('pixel');
	pixels = Array.from(pixel);

	pixels.forEach(function (pixel) {
		pixel.addEventListener("mouseover", function () {
			pixel.classList.add("draw");
      console.log(pixel);
		});
	});
