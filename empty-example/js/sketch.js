let pg;
let xShape = 0;
let yShape = 0;
let size = 80;
let xShapeGoal = 100;
let yShapeGoal = 100;
const STEP_WIDTH = 5;

function setup() {
  createCanvas(1080, 720)
  pg = createGraphics(1080, 720);
  reset();
  xShapeGoal = width / 2;
  yShapeGoal = height / 2;
}

function reset() {
  background(255)
  noFill()
  rect(0, 0, width, height)
}

function draw() {
  pg.circle(50, 50, 50, 50)
  image(pg)

  if (collisionWithMouse(xShape, yShape, size, size)) {
    console.log("i need healing");
    avoidMouse();
  }

  fill(0)

  if (!shapeReachedGoal()) {
    drawCloser(STEP_WIDTH)
  }
  reset()
  fill(0)
  rect(xShape, yShape, size, size)
}

function collisionWithMouse(x, y, r1, r2) {
  return mouseX > x - 100 && mouseX < x + r1 + 100 && mouseY > y - 100 && mouseY < y + r2 + 100;
}

function avoidMouse() {
  if (mouseX < xShapeGoal + size / 2) {
    xShapeGoal = Math.min(width - size, mouseX + 200);
  } else if (mouseX > xShapeGoal + size / 2) {
    xShapeGoal = Math.max(0, mouseX - 200)
  }

  if (mouseY < yShapeGoal + size / 2) {
    yShapeGoal = Math.min(height - size, mouseY + 200)
  } else if (mouseY > yShapeGoal + size / 2) {
    yShapeGoal = Math.max(0, mouseY - 200)
  }

  console.log(xShapeGoal)
  console.log(yShapeGoal);
}

function shapeReachedGoal() {
  return xShape > xShapeGoal - 10 && yShape > yShapeGoal - 10 && xShape < xShapeGoal + 10 && yShape < yShapeGoal + 10;
}

function drawCloser(step) {
  if (xShape < xShapeGoal) {
    xShape += step;
  } else if (xShape > xShapeGoal) {
    xShape -= step;
  }

  if (yShape < yShapeGoal) {
    yShape += step;
  } else if (yShape > yShapeGoal) {
    yShape -= step;
  }
}
