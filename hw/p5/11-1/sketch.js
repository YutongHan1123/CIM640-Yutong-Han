function preload(){
  table = loadTable('asset/Book1.csv', 'csv', 'header');
}
 

function setup() {
 createCanvas(400, 400);
 select("body").style("background-color", "pink");
 var container0 = createDiv();
 container0.id("container0");
 select("#container0").html("<h1>Your peoject tile goes here</h1>");
 select("#container0").style("width", "400px");
 select("#container0").style("margin", "0 auto");

 var cnv = createCanvas(400,400);
 cnv.id("mycanvas");
 //select("#mycanvas").center();
 cnv.parent(container0);


}


function draw() {
  background(0);


}
