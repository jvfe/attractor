const buildShape = (positionsVector) => {
  beginShape();
  for (const vector of positionsVector) {
    vertex(vector.x, vector.y, vector.z);
    strokeWeight(3);
  }
  endShape();
};

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

    buildShape(pointPositions);
  };

  return { draw };
};

const Rossler = () => {
  let [x, y, z] = [0, 1, 1];

  const [a, b, c] = [0.2, 0.2, 5.7];

  const pointPositions = [];

  const dt = 0.1;

  const draw = () => {
    const dx = (-y - z) * dt;
    const dy = (x + a * y) * dt;
    const dz = (b + z * (x - c)) * dt;

    x += dx;
    y += dy;
    z += dz;

    pointPositions.push(new p5.Vector(x, y, z));

    rotateX(PI / 3.0);
    buildShape(pointPositions);
  };

  return { draw };
};

const Thomas = () => {
  let [x, y, z] = [1.1, 1.1, 1];

  const b = 0.208186;

  const pointPositions = [];

  const dt = 10;

  const draw = () => {
    const dx = (sin(y) - b * x) * dt;
    const dy = (sin(z) - b * y) * dt;
    const dz = (sin(x) - b * z) * dt;
    const h = 0.027;

    x += dx * h;
    y += dy * h;
    z += dz * h;

    pointPositions.push(new p5.Vector(x, y, z));

    scale(5);
    buildShape(pointPositions);
  };

  return { draw };
};
