var posX = 0;
var posY= 0;
var rectSize = 100;
// size can't be a variable
var colors = "green";

var button1, button2;

var buttonArray = [];


function setup() {
  // put setup code here
  createCanvas(400,400);

  button1= new interfaces(100,200,50,"red", "Red Button");
  button2= new interfaces(200,200,50,"green", "Green Butoon");

  for(var i=0; i < 10; i++){
    var c = color(random(255),random(255),random(255));
    buttonArray[i] = new interfaces(random(width),random(height), 50, c, i);
  }
}

function draw() {
  // put drawing code here
  background(255);
  button1.display();
  if(button1.check(mouseX,mouseY)){
    console.log(button1.name);
  }
  button2.display();
  button2.check(mouseX,mouseY);

  for(var i = 0; i < buttonArray.length; i++){
    buttonArray[i].display();
    if(buttonArray[i].check(mouseX, mouseY)){
      console.log(buttonArray[i].name);
      background(buttonArray[i].color);
    }
  }
  // display(random(width), random(height), random(255), random(0,100));
  // respond to tempx, tempy, tempc, temps <-template 临时存放
  display(posX, posY, colors, rectSize);
  var box1 = check(mouseX, mouseY,posX, posY,rectSize);
  if(box1 == true){
    background("green");
  }

  display(posX + 100, posY + 100, "red", rectSize);
  var box2 = check(mouseX, mouseY,posX+100, posY+100,rectSize);

  if(box2 == true){
    background("red");
  }
}

// function display(){
//   fill(colors);
//   ellipse(posX, posY, rectSize, rectSize);
// }
function display(tempX,tempY,tempC,tempS){
  fill(tempC);
  // rect(tempX, tempY, tempS, tempS);
}

function check(mX, mY, locX, locY, tempRsize){
  //mouse position,boundary, ylocation
  // if(mX > locX && mX < locX + tempRsize && mY > locY && mY < locY + tempRsize){
  //   console.log("in box");
  //   return true;
  //   //return numbers
  // }else{
  //   return false;
  // }
//locX定位节点坐标
}


class interfaces{
  constructor(tempX, tempY, tempS, tempC, tempName){
    //yourself DNA teacher recommand this class-constructor
    this.x = tempX;
    this.y = tempY;
    this.size = tempS;
    this.color = tempC;
    this.name = tempName;
    this.overlay = false;
  }
  display(){

    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
    text(this.name, this.x, this.y - 10);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.size,this.size);
    }
  }
  check(mX,mY){
    if(mX > this.x && mX < this.x + this.size && mY > this.y && mY < this.y + this.size){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }
}










//end of code