const selectElement = document.querySelector(".atrator");
let attractor = selectAttractor(selectElement.value);

selectElement.addEventListener("change", (event) => {
  attractor = selectAttractor(selectElement.value);
});

function setup() {
  createCanvas(window.innerWidth / 1.3, window.innerHeight / 1.3, WEBGL);
}

function draw() {
  background("#fae9be");

  orbitControl(1, 1, 0.2);

  scale(5);
  stroke("#493323");
  noFill();

  attractor.draw();
}

function windowResized() {
  createCanvas(window.innerWidth / 1.3, window.innerHeight / 1.3, WEBGL);
}
