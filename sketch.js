var movingR,fixedR;

function setup() {
  createCanvas(800,400);
  fixedR= createSprite(400, 200, 50, 30);
  fixedR.shapeColor="green";
  movingR= createSprite(200,200,30,50);
  movingR.shapeColor="green";

  fixedR.debug=true;
  movingR.debug=true;
}

function draw() {
  background(0);  

  console.log(movingR.x-fixedR.x);

  if(movingR.x-fixedR.x < fixedR.width/2+movingR.width/2 
  
    ){
    fixedR.shapeColor="red";
    movingR.shapeColor="red";
  }
  else
  {
    fixedR.shapeColor="green";
    movingR.shapeColor="green";
  }

  movingR.x=World.mouseX;
  movingR.y=World.mouseY;
  drawSprites();
}