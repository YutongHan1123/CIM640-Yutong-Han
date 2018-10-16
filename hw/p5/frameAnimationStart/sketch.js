  var frameAmounts = 4;
  var frameArray = [];
  var currentFrame = 0;

  var interval = 2000;
  var prevMillis = 0;
  var interval1 = 3000;
  var interval2 = 500;
  var prevMillis2 = 0;
  var counter = 0;

  var controls = {
    "play" : [50,400,50,"green"],
    "stop" : [110,400,50,"red"],
    "fwd" : [160,400,50,"blue"],
    "back" : [210,400,50,"yellow"]
  };

  var state = "stop";

//x,y,size,color

  function preload(){
    //var frameString = "assests/Thatwasclose0.jpg";
    //frameArray[0] = loadImage(frameString);

    for(var frames = 0; frames < frameAmounts; frames++){
      var frameString = "assests/Thatwasclose" + frames + ".jpg";
      frameArray[frames] = loadImage(frameString);
    }
  }

  function setup(){
    createCanvas(500,500);
    console.log(controls["play"]);
    console.log(controls["play"][3]);

    for(var keys in controls){
      console.log(keys + " values: " + controls[keys]);
    }
  }

  function draw(){
    // frameRate(5);
    frameRate(1);
    //console.log(millis());
    image(frameArray[currentFrame],0,0);

    if(millis() - prevMillis > interval && state == "play"){
      currentFrame++;
      prevMills = millis();
    }
    //currentFrame++;
    //console.log(currentFrame);
    if(currentFrame > frameAmounts - 1){
      currentFrame = 0;
    }
    // if(millis() - prevMillis2 > interval1){
    //   counter++;
    //   prevMillis2 = millis();
    // }
    // if(counter > width){
    //   counter = 0;
    // }
    //
    // ellipse(counter, height/2, 20,20);

    ellipse(mouseX, mouseY,10,10);

    for(var keys in controls){
      fill(controls[keys][3]);
      rect(controls[keys][0], controls[keys][1], controls[keys][2],
      controls[keys][2]);
      //second one is height and width
      text(keys, controls[keys][0] - 5, controls[keys][1] - 5);

      if(mouseX > controls[keys][0] && mouseX < controls[keys][0] +
        controls[keys][2] && mouseY > controls[keys][1] && mouseY <
        controls[keys][1] + controls[keys][2]){
          fill(127,200);
          rect(controls[keys][0], controls[keys][1], controls[keys][2],
          controls[keys][2]);

      }
    }
  }

function mousePressed(){
  for(var keys in controls){
    if(mouseX > controls[keys][0] && mouseX < controls[keys][0] +
      controls[keys][2] && mouseY > controls[keys][1] && mouseY <
      controls[keys][1] + controls[keys][2]){

        state = keys;
        console.log(state);
        if(state == "fwd"){
          currentFrame++;
          if(currentFrame >= frameArray.length){
            currentFrame = 0;
          }
        }else if(state == "back"){
          currentFrame--;
          if(currentFrame < 0){
            currentFrame = frameArray.length - 1;
          }
        }
//check the end of the array
      }
  }
}







///end of code
