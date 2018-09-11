
var x=200;
var y=200
var r=50;
function setup() {
 createCanvas(400, 400);
}

function draw() {
 background('#fae');
 if(mouseIsPressed&&dist(mouseX,mouseY,x,y)<r){
  x=mouseX;
  y=mouseY;
 }

 stroke('rgb(0,255,0)');
 strokeWeight(4);
 fill('rgba(0,255,0, 0.25)');
 ellipse(x,y,r,r);

}
