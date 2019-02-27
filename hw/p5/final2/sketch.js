let spritesheet;
let spritedata;

var radius = 40;
var x = -radius;
var speed = 0.5;
var a;
var b;

var stopSign;

var scr = 1;

var ellipse;
var brake;
var ex = 300;
var ey = 300;
var ez = 35;

var gif;

var countdown = 0;

var interval = 1000;

  var secondsEllapsed = 0;

  var info = "";



var spot = {
  g: 100,
  h: 50
}
var g, h;


function preload(){
  // spritedata = loadJSON('horse.json');
  spritesheet = loadImage('assets/road1.jpg');
  stopSign = loadImage('assets/stop.svg');
  coll = loadImage('assets/coll.jpg');
  happy = loadImage('assets/happy.jpg');
  dollar = loadImage('assets/dollar.svg');

  brak = loadSound('assets/brake.mp3');
  patrol = loadSound('assets/patrol.mp3');
  ambu = loadSound('assets/ambulance.mp3');


}


function setup() {
 createCanvas(628, 348);
 // g = width/2;
 // h = height;



 // ellipseMode(RADIUS);

 frameRate(60);


}


function draw() {
  // background(spritesheet);
  // x += speed; // Increase the value of x arc(x, 60, radius, radius, 0.52, 5.76);
  // if (x > width+radius) { // If the shape is off screen
  //   x = -radius;  // move to the left edge
  //     }
  //   arc(x, 60, radius, radius, 0.52, 5.76);

  secondsEllapsed= Math.floor(millis() / 1000);

  console.log(secondsEllapsed);


  if (scr === 1) {
    drawScreen1();
  } else if (scr === 2) {
    drawScreen2();//scr 1
  } else if (scr === 3) {
    drawScreen3();//scr 2
  } else if (scr === 4) {
    drawScreen4();//scr 2
  }
}

function drawScreen1(){
  background(spritesheet);


  push();
   stroke(255);
  text("Safe Driving",17,17,400,100);
   pop();
  // ellipse(400,470,35,35);

  // if (overCircle(ex, ey, ez, ez)) {
  //   noFill();
  //   stroke(255);
  //   image(coll,0,0,1230,490);
  // }
  // if (frameCount > 300){
  // var d = 155;
  // var a = 40;
  // var b = 50;
  // var c = 65;
  //   }

  //    if (frameCount > 600){
  // var d = 25;
  // var a = 160;
  // var b = 200;
  // var c = 25;
  //   }

      if (frameCount > 900){
  var d = 0;
  var a = 320;
  var b = 400;
  var c = 85;
    }

     if (frameCount > 1200){
  var d = -80;
  var a = 640;
  var b = 800;
  var c = 60;
  //image(stopSign,117+c,50+d,a,b);


    }
    if(frameCount==1560){
        background(coll);
      // dead.play();
    }
    fill(0);
    ellipse(ex, ey, ez, ez);

    if(secondsEllapsed > 3 && secondsEllapsed < 5){
      var d = 155;
      var a = 40;
      var b = 50;
      var c = 65;
      console.log("here");
      countdown = 0;

      image(stopSign,117+c,50+d,a,b);

    }

    if(secondsEllapsed >= 5 && secondsEllapsed < 7){
      var d = 25;
      var a = 160;
      var b = 200;
      var c = 25;
      console.log("here");
      countdown = 1;
      image(stopSign,117+c,50+d,a,b);

    }

    if(secondsEllapsed >= 7 && secondsEllapsed < 9){
      var d = 25;
      var a = 160;
      var b = 200;
      var c = 25;
      console.log("here");
      image(stopSign,117+c,50+d,a,b);

      countdown = 2;

    }

     if (countdown == 2){
    // go to crash scene
     info = "crashed"
    }

    text(info, width/2, height/2);
    // if(secondsEllapsed == 4){
    //   image(stopSign,117+c,50+d,a,b);
    //
    // }
    //
    // if(secondsEllapsed == 5){
    //   image(stopSign,117+c,50+d,a,b);
    //
    // }
}



function drawScreen2() {
  background(happy);

}

function drawScreen3() {
  background(coll);


}

function drawScreen4() {
  background(200);
  frameRate(3);

  spot.g = random(0, width);
  spot.h = random(0, height);
  image(dollar, spot.g, spot.h,75,75);

  spot.g = spot.g + random(-1, 1);
  // Moving up at a constant speed
  spot.h = spot.h - 1;


  if (spot.h < 0) {
    spot.h = height;
  }

}


function mousePressed() {



  brak.setVolume(1.0);
  brak.play();
    var overCircle = dist(mouseX, mouseY, ex,ey);

    if (scr == 1 && overCircle < ez/2 && countdown == 0)  {

      // if (overCircle(ex, ey, ez)){
      info = "too early";


      }
    if (scr == 1 && overCircle < ez/2 && countdown == 1)  {

      // if (overCircle(ex, ey, ez)){
        scr = 2;


      }

    if(scr == 2){
        scr ==3;
        patrol.setVolume(1.0);
        patrol.play();
        ambu.setVolume(1.0);
        ambu.play();
  } else if (scr == 3) {
        scr = 4;

  }
}
