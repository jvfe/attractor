let [x, y, z] = [1, 1, 1];

const [sigma, rho, beta] = [10, 28, 8 / 3];

const pointPositions = [];

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background("#fafafa");

  const dt = 0.01;
  const dx = sigma * (y - x) * dt;
  const dy = (x * (rho - z) - y) * dt;
  const dz = (x * y - beta * z) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;

  pointPositions.push(new p5.Vector(x, y, z));
  orbitControl();

  scale(5);
  stroke(140, 123, 200, 0.3);
  noFill();

  beginShape();
  for (const vector of pointPositions) {
    vertex(vector.x, vector.y, vector.z);
    strokeWeight(3);
  }
  endShape();
}
