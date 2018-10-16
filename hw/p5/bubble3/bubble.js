var bubbles = [];

function setup() {
  // put setup code here
  createCanvas(600,400);
  for( var i = 0; i < 400; i++ ){
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}


function draw() {
  // put drawing code here
  background(0);
  for( var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }

function Bubble(x, y){
  this.x = x;
  this.y = y;
  this.col = color(255,100);
  this.lifespan = 25;

  this.display = function(){
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 48,48);
  }
  this.clicked = function(){
    var d= dist(mouseX, mouseY, this.x, this.y);
    if(d < 24){
     this.col= color(255, 0, 200);
  }
}

  this.update = function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}















//end of the code
}
