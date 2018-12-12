var a = 1;
//var b = 'b';
var num1 = 3;
var b = 'b';
var word1 = "word";
var trueFalse = true;
var sentences = "I am a sentence";
 // sometimes you need be careful about name variable like height or width
 // ""or''can use in same way, but be careful when you use like'I'm a sentence'
 //because the ''first one will confuse with second one

var charColor = "orange";
var eyesize = 50;
var facePosX = 150;
var facePosY = 120;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(0);
  background(0,0,255);
  background("pink");
  background("#321987");
  background("#fae");

  console.log(a + num1);
  console.log(a - num1);
  //console.log(a + b);
  //single line comment
  //console.log(a * b);
  /*
  block of comments
  */

  //this is only in setup scope
  //only available in setup
  var setupVariable = 5;
}

function draw() {
  facePosX = mouseX;
  facePosY = mouseY;
  // put drawing code here
  stroke('yellow');
  strokeWeight(0);
  //does not work, setup Variable 's scope is only in the set up'
  //strokeWeight(setupVariable);

  fill('green');
  ellipse(facePosX,facePosY,eyesize,eyesize);
  ellipse(facePosX + 60,facePosY,eyesize,eyesize);
  //mouth
  rect(facePosX,facePosY + 80,90,30);
  //mole

  stroke('red');
  strokeWeight(10);
  point(width/2, height/2);

  line(facePosX,215,facePosX + 90,215);
//pacperson
  arc(facePosX + 100,facePosY + 100,100,100, QUARTER_PI, TWO_PI - QUARTER_PI);
  arc(facePosX,facePosY +200,100,100, QUARTER_PI, PI + HALF_PI + QUARTER_PI);
}

function mousePressed(){
  charColor = "blue";
}
