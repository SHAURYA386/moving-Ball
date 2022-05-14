
function setup() {
  createCanvas(1000, 1000);

  ball=createSprite(200, 200, 50, 50);
}

function draw() 
{
  background(30);

  if(keyIsDown(UP_ARROW)){

    ball.y = ball.y -2;
  }
  
  if(keyIsDown(DOWN_ARROW)){

    ball.y = ball.y + 2;
  }

  if(keyIsDown(RIGHT_ARROW)){

    ball.x = ball.x + 2;
  }

  if(keyIsDown(LEFT_ARROW)){

    ball.x = ball.x -2;
  }

  drawSprites()
}




