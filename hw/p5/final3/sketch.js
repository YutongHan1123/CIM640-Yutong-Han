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
var ex = 250;
var ey = 330;
var ez = 35;

var gif;

var countdown = 0;

var interval = 1000;

var secondsEllapsed = 0;

var info = "";

var i = 0;
var j = 0;

var spot = {
  g: 100,
  h: 50
}
var g, h;

var gif_createImg;


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
  gif_createImg = createImg('assets/cry.gif');
  happy1 = createImg('assets/happy.gif');
  gif_createImg.hide();
  happy1.hide();


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
    drawScreen2();
  } else if (scr === 3) {
    drawScreen3();
  } else if (scr === 4) {
    drawScreen4();
  }
}

function drawScreen1(){
  background(spritesheet);

  push();
   stroke(255);
   textSize(25);
   text("Safe Driving",17,17);
  pop();

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
      var d = 120;
      var a = 80;
      var b = 100;
      var c = 100;
      console.log("here");
      countdown = 1;
      image(stopSign,117+c,50+d,a,b);
    }

    if(secondsEllapsed >= 7 && secondsEllapsed < 9){
      var d = 30;
      var a = 320;
      var b = 400;
      var c = 80;
      console.log("here");
      image(stopSign,117+c,50+d,a,b);
      countdown = 2;
    }

    if(secondsEllapsed >= 9 && secondsEllapsed < 11){
      var d = 0;
      var a = 640;
      var b = 800;
      var c = 0;
      image(stopSign,117+c,50+d,a,b);
      countdown = 3;
    }

     if (countdown == 3){
    // go to crash scene
     info = "crashed";
     scr =3;
     patrol.setVolume(1.0);
     patrol.play();
     ambu.setVolume(1.0);
     ambu.play();
   }

     // if(secondsEllapsed >= 15 && secondsEllapsed < 20){
     //   console.log("here");
     //   countdown = 4;
     //   if (countdown == 5){
     //     info = "money flying away";
     //   scr =4;
     // }
    text(info, width/2, height/2);
}



function drawScreen2() {
  background(happy);

  if(j = 0){
    brak.setVolume(1.0);
    brak.play();
  }
  j++;

  if(secondsEllapsed >= 12){
    countdown = 4;
    if (countdown == 4){
      happy1.position( 20, 0);
      happy1.show();;
    }
  }
}

function drawScreen3() {
  background(coll);
  info = "crashed";
    if(i = 0){
      patrol.setVolume(2.0);
      patrol.play();
      ambu.setVolume(2.0);
      ambu.play();
    }
    i++;

    if(secondsEllapsed >= 16 && secondsEllapsed < 18){
      console.log(countdown);
      countdown = 4;
      if (countdown == 4){
      scr = 4;
      patrol.stop();
      ambu.stop();
      console.log(scr);
    }
  }
}

function drawScreen4() {
  background(255);
  frameRate(3);

  gif_createImg.position(350, 200);
  gif_createImg.show();

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
    var overCircle = dist(mouseX, mouseY, ex,ey);
  if (scr == 1 && overCircle < ez/2 && countdown == 1){
    info = "too early";
  }
  if(scr == 1 && overCircle < ez/2 && countdown == 2){
    scr = 2;
  }
}

// function mouseClicked() {
//
//     if (scr == 3 && mouseOn(150, 150, 150, 275)) {
//     scr = 4;
//   }
// }
