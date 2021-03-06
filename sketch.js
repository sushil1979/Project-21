var bullet, wall, thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 30, 20);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background(0);
  
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = "red";
    } else if(damage < 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall){
  var bulletRightEdge = bullet.width + bullet.x;
  var wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
   return true;
  } else {
   return false;
   }
}