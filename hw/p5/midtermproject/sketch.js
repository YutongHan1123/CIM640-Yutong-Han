

var car1;
var car2;




function preload(){
  car1 = loadImage('assets/car1.png');
  car2 = loadImage('assets/car2.png');
}


function setup() {
  // put setup code here
  createCanvas(600,400);
  background(0);

}

function draw() {
  // frameRate(10);
   //spot.x = random(0, width);
   //spot.y = random(0, height);
  // fill(col.r, col.g, col.b);

background(0, 26, 51);



quad(40, 0, 0, 0, 600, 400, 600, 350);
quad(0, 0, 0, 40, 480, 400, 600, 400);

quad(0, 310, 500, 0, 600, 0, 0, 450);
quad(0, 400, 170, 400, 600, 75, 600, 0);


push();
image(car1, 120, 300, 100, 70);
translate(120, height / 2);
rotate(PI/9.0);
pop();

push();
image(car2, 1, 1, 100, 70);
rotate(PI/ 4.0);
pop();


  // sinθ = y / Math.sqrt(x**2 + y**2)
  // cosθ = x / Math.sqrt(x**2 + y**2)

}


function mousePressed(){

}









//end of the code
