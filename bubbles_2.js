var x;
var y;
var radius;

function setup() {
  createCanvas(1080, 720);
  x = random(width);
  y = random(height);
  radius = 15;
}

function draw() {
  background(0);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(0, 0, 0, 200);
  }
  else {
    fill(255, 255, 255, 255);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 1);
}
