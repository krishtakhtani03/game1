var bg
var bg1


function preLoad(){
bg1=loadImage("spaceship.png")
}


function setup() {
  createCanvas(800,800);
  bg=createSprite(400, 400, 50, 50);
  bg.addImage(bg1)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}