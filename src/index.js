const Lorenz = () => {
  let [x, y, z] = [1, 1, 1];

  const [sigma, rho, beta] = [10, 28, 8 / 3];

  const pointPositions = [];

  const dt = 0.01;

  const draw = () => {
    const dx = sigma * (y - x) * dt;
    const dy = (x * (rho - z) - y) * dt;
    const dz = (x * y - beta * z) * dt;

    x += dx;
    y += dy;
    z += dz;

    pointPositions.push(new p5.Vector(x, y, z));

    beginShape();
    for (const vector of pointPositions) {
      vertex(vector.x, vector.y, vector.z);
      strokeWeight(3);
    }
    endShape();
  };

  return { draw };
};

let attractor = Lorenz();

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background("#fafafa");

  orbitControl(1, 1, 0.2);

  scale(5);
  stroke(140, 123, 200, 0.3);
  noFill();

  attractor.draw();
}
