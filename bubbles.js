var x;
var y;
var radius;
var b1; 
var b2;
const Y_AXIS = 1;
const X_AXIS = 2;
var lastX;
var lastY;

function setup() {
  createCanvas(1080, 720);
  lastX = x = (width / 2);
  lastY = y = (height / 2);
  radius = 50;
  b1 = color(152, 211, 227,)
  b2 = color(163, 152, 227,)
}

function draw() {
  setGradient(0, 0, width, height, b1, b2, X_AXIS);

  if (dist(mouseX, mouseY, x, y) > radius) {
    if (mouseIsPressed) {

      lastX = mouseX;
      lastY = mouseY;
    }
   fill(219, 129, 182, 200);
  stroke(219, 129, 182, 200);
  }
  else {
   fill(191, 44, 103, 200);
   stroke(191, 44, 103, 200); 
  }
  
   x += (lastX - x) / 10
   y += (lastY - y) / 10
  
  ellipse(x, y, radius * 2);
  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

