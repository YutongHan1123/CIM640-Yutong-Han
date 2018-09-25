var r = 255;
var g = 255;
var b = 255;
var cX = 50;
var xY = 50;
var cEdge = 20;

var rectX = 50;
var rectY = 75;
var rectSize = 100;

var sun;
var moon;



function preload(){
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  frameRate(10);

  background(r,g,b);
  fill(r,g,b);

  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
  //Interface
  textSize(18);
  text("Move over each area to reveal a surprise!", 20,20);
  line(width/2, 25, width/2, height);
  text("Day", 20,360);
  text("Night", 300,360);

//Interface

  /*
  if(true){
  execute this code
} then do something
  */
  //可以<=,也可以>=
  if (mouseX <= width/2){
    console.log("Day Side");
      image(sun,-100,60);
  }
  if (mouseX > width/2){
    console.log("Night Side");
      image(moon,170,60);
  }
  ellipse(cX,cY,cEdge,cEdge);
var cDist = dist(cX, cY, mouseX, mouseY);
console.log("cDist: " + cDist);
//distance

  if(cDist < 10){
    r = 255;
    g = 0;
    b = 1;
  }
  else{
    r = 255;
    g = 255;
    b = 255;
  }
//
// rect(rectX,rectY,rectSize,rectSize);
// if (mouseX > rectX && mousex < rectX + rectSize){
//   if(mouseY > rectY && mouseY < rectY + rectSize){


    if (mouseX > rectX && mousex < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize){
    console.log("In here");
    r = random(256);
    g = random(0,256);
    b = random(256);
  }


  rect(rectX,rectY,rectSize,rectSize);




//end of the code
}
