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
  background(255);
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

}
