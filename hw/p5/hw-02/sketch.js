var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

var cell;
var virus;




function preload(){
  cell = loadImage('assets/cell.png');
  virus = loadImage('assets/virus.png');
}


function setup() {
  // put setup code here
  createCanvas(600,400);
  background(0);

}

function draw() {
  frameRate(10);
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b);


  image(cell, spot.x, spot.y, 50, 50);

  image(virus, mouseX, mouseY, 65, 65);
}


function mousePressed(){
  background(250, 250, 100);
}









//end of the code
