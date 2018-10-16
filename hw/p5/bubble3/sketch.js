var b1;
var b2:

function setup() {
  // put setup code here
  createCanvas(600,400);
  b1 = new Bubble(250,200);
  b2 = new Bubble(350,200);
    }

function draw() {
  // put drawing code here
  background(0);
  b1.update();
  b2.update();
  b1.display();
  b2.display();




//end of the code
}













//end of the code
}
