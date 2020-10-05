var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  
speed=random(223,240);
weight=random(30,52);
thickness=random(22,83);


bullet=createSprite(50,200,50,50);
wall=createSprite(1200,200,60,height/2);


}
function draw() {
  background(255,255,255); 
 
  bullet.velocityX=speed;
 



  drawSprites();
}