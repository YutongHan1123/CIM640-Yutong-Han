function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      ellipse(50, 50, 50, 50);
    }
    if (mouseButton === RIGHT) {
      rect(25, 25, 50, 50);
    }
    if (mouseButton === CENTER) {
      triangle(23, 75, 50, 20, 78, 75);
    }
  }

  print(mouseButton);
}

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
