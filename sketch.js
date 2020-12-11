
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(100, 400, 50, 50);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.12;

  ground = createSprite(200, 500, 600, 40)
  ground.velocityX = -5;
  ground.x = ground.width/2;
  
  score= 0;
  
}


function draw() {
background("white");
  
  textSize(15);
  text("Survival Time: " + score, 230, 30);
  score = score + Math.round(getFrameRate()/60);
  if(ground.x < 300) {
    ground.x = ground.width/2;
  }

  if(keyDown("space") && monkey.y > 400) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY +0.5;
  
  monkey.collide(ground);
  food();
  obstacles();
  
  drawSprites();
}

function food() {
  if(frameCount % 100 === 0) {
    banana = createSprite(600, Math.round(random(250, 400)), 20, 40);
    banana.addImage(bananaImage)
    banana.velocityX = -5;
    banana.scale = 0.12
  }
}

function obstacles() {
  if(frameCount % 200 === 0){
    stone = createSprite(600, 450, 50, 50);
    stone.velocityX = -7;
    stone.addImage(obstaceImage);
    stone.scale = 0.15;
  }
}



