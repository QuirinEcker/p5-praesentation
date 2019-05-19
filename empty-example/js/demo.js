let rad = 60;
let xpos, ypos;
let xspeed = 2.8;
let yspeed = 2.2;
let xdirection = 1;
let ydirection = 1;

function setup() {
  let canvas = createCanvas(1000, 500)
  canvas.parent('demo')

  reset();
  xpos = 50;
  ypos = 50;
}

function reset() {
  background(255)
  noFill()
  stroke(0)
  rect(0, 0, width, height)
}

function draw() {
  reset();

  xpos = xpos + ( xspeed * xdirection );
  ypos = ypos + ( yspeed * ydirection );

  if (xpos > width-rad/2 || xpos < rad / 2) {
    xdirection *= -1;
  }
  if (ypos > height-rad/2 || ypos < rad / 2) {
    ydirection *= -1;
  }

  fill(237, 39, 96)
  noStroke();
  ellipse(xpos, ypos, rad, rad);
}

window.addEventListener("load", () => {
  window.addEventListener('keypress', function(e) {
    let keyCode = e.which;
    let key = e.key;

    if (keyCode == 32) {
      window.location.href="./Grundlagen.html";
    } else if (key == 'x') {
      window.location.href="./title.html";
    }
  })
});
