const buildShape = (positionsVector, xyz) => {
  let [x, y, z] = xyz;
  strokeWeight(8);
  point(x, y, z);
  beginShape();
  for (const vector of positionsVector) {
    strokeWeight(3);
    vertex(vector.x, vector.y, vector.z);
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
    scale(1);
    buildShape(pointPositions, [x, y, z]);
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
    scale(1);
    buildShape(pointPositions, [x, y, z]);
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

    scale(7);
    buildShape(pointPositions, [x, y, z]);
  };

  return { draw };
};

const selectAttractor = (name) => {
  switch (name) {
    case "lorenz":
      return Lorenz();
      break;
    case "rossler":
      return Rossler();
      break;
    case "thomas":
      return Thomas();
      break;
  }
};
