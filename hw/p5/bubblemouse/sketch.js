var bubbles = [];
var bg;
var y = 0;
var showEllipse=false;
var showRect=false;

var x=200;
var y2=200;
var speed=2;


function preload() {
  let style = document.createElement('link')
      style.rel="stylesheet";
      style.href = 'https://fonts.googleapis.com/css?family=Gaegu';
      document.getElementsByTagName('head')[0].appendChild(style);
}

function setup() {
  // put setup code here
  bg = loadImage("assets/1.jpg");
  createCanvas(765,585);
  resetSketch();

  textFont("Gaegu");
    fill(123, 0 , 0);
    stroke(255);

    var button = createButton("reset");
    button.mousePressed(resetSketch());
}

function resetSketch(){

}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  // put drawing code here
  // background(127);
  background(bg);

  textSize(42);
  textAlign(LEFT,CENTER);
   text("Play with bubbles", 25, 60);
   textSize(26);
   text("Click to see a big bubble", 27, 100);
   text("Hold on mouse, do you see other graphs？", 27, 120);
   text("Use WASD to move a bubble", 27, 140);

   ellipse(x,y2,20,20);
     if(keyIsPressed){
      	if(key=='a'){
         x-=speed;
       }
       if(key=='d'){
         x+=speed;
       }
     }
     if(keyIsDown(87)){
       y2-=speed;
     }
     if(keyIsDown(83)){
       y2+=speed;
     }


  // fill(255,0,140,70);
  // rect(25, 125, 50, 50);
  //
  // fill(0,255,40,70);
  // rect(25, 185, 50, 50);
  //
  // fill(0,0,140,70);
  // rect(25, 245, 50, 50);

  if (mouseIsPressed){
    ellipse(200, height/2, 50, 50);
   }
   if(showEllipse){
      ellipse(350, height/2, 50, 50);
   }
   if(showRect){
    rectMode(CENTER);
    rect(500,height/2,50,50);
   }


  if ((mouseX > 30) && (mouseX < 70) && (mouseY > 320) && (mouseY < 380)){
    fill(255);
  }
  else {
    fill(0);
  }
  rect(30, 320, 40, 60);



 //  for (var j = 0; j < width; j += 90) {
 //   fill(129, 206, 15, 200);
 //   rect(0, j, width, 45);
 //   fill(255, 255, 255, 200);
 //   rect(j, 0, 45, height);
 //   stroke(255);
 // }


  for( var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }

  if (bubbles.length > 50) {
    bubbles.splice(0,1);
  }
  }

  function keyPressed(){
     if(key=='Z'){
     x-=20;
    }
    if(key=='X'){
     x+=20;
    }
  }

  function keyReleased(){
     if(key=='C'){
     y2-=20;
    }
    if(key=='V'){
     y2+=20;
    }
  }


    function Bubble(x, y){
      this.x = x;
      this.y = y;
      this.display = function(){
        // stroke(255);
        fill(255,0,150,150);


        ellipse(this.x, this.y, 24, 24);

      }
      this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);

      }
    }


    // function mouseClicked(){
    //   // bubblesFill = function(){
    //   //   fill(r,g,b,70);
    //   // }
    //
    //   if((mouseX > 25) && (mouseX < 75) && (mouseY > 125) && (mouseY < 175)){
    //     fill('rgba(255,0,0, 0.25)');
    //     // bubblesFill(r = 255, g = 0, b = 150, 70);
    //   }
    //
    //   if((mouseX > 25) && (mouseX < 75) && (mouseY > 185) && (mouseY < 135)){
    //     fill('rgba(0,255,0, 0.25)');
    //     // bubblesFill(r = 0, g = 255, b = 150, 70);
    //   }
    //
    //   if((mouseX > 25) && (mouseX < 75) && (mouseY > 245) && (mouseY < 295)){
    //     fill('rgba(0,0,255, 0.25)');
    //     // bubblesFill(r = 0, g = 0, b = 150, 70);
    function mouseClicked(){
     showEllipse=!showEllipse;
    }
    function mousePressed(){
     showRect=true;
    }
    function mouseReleased(){
     showRect=false;
    }


    // bubbles[i] = {
    //   x : random(0, width),
    //   y : random(0, height),
    //   display: function(){
    //     stroke(255);
    //     fill(random(0,255,255));
    //   ellipse(this.x, this.y, 24, 24);
    // },
    //   move:function(){
    //     this.x = this.x + random(-1, 1);
    //     this.y = this.y + random(-1, 1);
    //   }
    // }








//end of the code
