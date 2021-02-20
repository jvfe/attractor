const selectElement = document.querySelector(".atrator");
let attractor = selectAttractor(selectElement.value);

selectElement.addEventListener("change", (event) => {
  attractor = selectAttractor(selectElement.value);
});

function setup() {
  createCanvas(600, 500, WEBGL);
}

function draw() {
  background("#fafafa");

  orbitControl(1, 1, 0.2);

  scale(5);
  stroke(140, 123, 200, 0.3);
  noFill();

  attractor.draw();
}
