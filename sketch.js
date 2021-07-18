var sea;
var seaImage;
var ship;
var shipImage;
function preload(){
seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200);
  sea.addImage(seaImage);
sea.scale = 0.2;

ship= createSprite(200,200);
ship.addAnimation("ship",shipImage);
ship.scale = 0.2;

}

function draw() {
  background("white");
  sea.velocityX = -2;
  if(sea.x<0){
    sea.x = sea.width/2
  }


  drawSprites();
}