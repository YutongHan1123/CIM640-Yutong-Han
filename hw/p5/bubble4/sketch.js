var bubbles = [];

function setup() {
  // put setup code here
  createCanvas(600,400);
  for( var i = 0; i < 400; i++ ){
    bubbles[i] = new Bubble();

    function Bubble(){
      this.x = random(0,width);
      this.y = random(0,height);
      this.display = function(){
        stroke(255);
        fill(random(0,255,255));
        ellipse(this.x, this.y, 24, 24);

      }
      this.move = function(){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);

      }
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
  }
}

function mousePressed(){
  for( var i = 0; i < bubbles.length; i++){
    bubbles[i].clicked();
}

function draw() {
  // put drawing code here
  background(0);
  for( var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }




//end of the code
}













//end of the code
}
