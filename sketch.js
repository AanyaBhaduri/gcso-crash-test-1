var  wall, thickness;
var car,speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)


car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(1500,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(255,255,255);  

  if(car.isTouching(wall))
  {
car.velocityX=0;
var damage=0.5 * weight* speed* speed/22500;


if(damage>180)
{
car.shapeColor=color(255,0,0);

}

if(damage<100)
{
  car.shapeColor=color(0,255,0);
  
}
if(damage>100 && damage<180)
{
  car.shapeColor=color(230,230,0);
  
}
  }
  
  
  drawSprites();
}




