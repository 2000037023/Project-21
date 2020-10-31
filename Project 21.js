var fixedRect, bullet;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";

  bullet=createSprite(400,200,80,30);
  bullet.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  bullet.x= World.mouseX;
  bullet.y=World.mouseY;

  if(bullet.x-fixedRect.x < bullet.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x < bullet.width/2 + fixedRect.width/2 &&
    bullet.y-fixedRect.y < bullet.height/2 + fixedRect.height/2 &&
    fixedRect.y-bullet.y < bullet.height/2 + fixedRect.height/2){
    bullet.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else {
    bullet.shapeColor="brown";
    fixedRect.shapeColor="green";
  }

  if(hasCollided(bullet, fixedRect)){
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, _fixedRect) {
  bulletRightEdge = bullet.x + bullet.width;
if (bulletRightEdge>=wallLeftEdge) {
  return true
}
return false;
}