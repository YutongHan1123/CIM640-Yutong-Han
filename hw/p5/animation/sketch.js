  var xPos = 0;
  var yPos = 0;
  var ballSize = 20;


  var trigger = false;
  var trigger2 = false;
  var speed = 5;

// function draw() {
//   background(237, 34, 93);
//   fill(0);
//
//   if (mouseIsPressed) {
//     if (mouseButton === LEFT) {
//       ellipse(50, 50, 50, 50);
//     }
//     if (mouseButton === RIGHT) {
//       rect(25, 25, 50, 50);
//     }
//     if (mouseButton === CENTER) {
//       triangle(23, 75, 50, 20, 78, 75);
//     }
//   }
//
//   print(mouseButton);
// }

function setup() {
  // put setup code here
  createCanvas(500,500);
  xPos = width/2;
}

function draw() {
  // put drawing code here
  background(255);
  ellipse(xPos, yPos, ballSize, ballSize);

  if(trigger == false){
    yPos+=speed;
    //yPos = yPos + speed
  }else{
    yPos-=speed;
    //yPos = yPos - speed

    if(trigger2 == false){
      xPos+=speed;
    }else{
      xPos-=speed;
    }
  }
  yPos++;

  if(yPos > height){
    trigger = true;
  }

  if(yPos < 0){
    trigger = false;
  }
  if(xPos > width){
    trigger2 = true;
  }
  if(xPos < 0){
    trigger2 = false;
  }
}























//end of the code
