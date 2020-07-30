var wall, thickness;
var bullet, speed, weight;

function setup() {
 
  var canvas = createCanvas(1600,400);

  bullet = createSprite(100,200,10,20);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";

  speed = random(0,15);
  weight = random(30,52);
 
}

function draw() {
  background(0)

  thickness = random(22,38); 
  
  bullet.velocityX = speed;

  if (hasCollided(bullet, wall)){
    
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  else{
  return false;
  }
}