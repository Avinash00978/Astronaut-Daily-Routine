var bg,sleep,brush,gym,eat,bath,move,astronaut;

function preload(){
bg = loadImage ("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png"); 
gym = loadAnimation("gym1.png","gym2.png");
eat = loadAnimation("eat1.png","eat2.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move1.png","move.png");

}


function setup() {
  createCanvas(600,500);
 astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;


}

function draw() {
  background(bg); 
  textSize(20);
  fill ("white");
  text("Instruction",20,35);
  textSize(15);
  text("UP ARROW = Brushing",20,55);
  text("DOWN ARROW = Gymming",20,70);
  text("LEFT ARROW = Eating",20,85);
  text("RIGHT ARROW = Bathing",20,100);
  text("M key = moving",20,115);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){

    astronaut.addAnimation("Brushing",brush);
    astronaut.changeAnimation("Brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){

    astronaut.addAnimation("Gymming",gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){

    astronaut.addAnimation("Eating",eat);
    astronaut.changeAnimation("Eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){

    astronaut.addAnimation("Bathing",bath);
    astronaut.changeAnimation("Bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("M key")){

    astronaut.addAnimation("Moving",move);
    astronaut.changeAnimation("Moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  drawSprites();
}