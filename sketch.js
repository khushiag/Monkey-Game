
var monkey, monkey_running;
var ground, grassImage;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  //loading images for bananas, obstacles and ground
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("grass.png");
 
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}

function setup() {
  createCanvas(550, 350);
  
  //creating the monkey
  monkey = createSprite(100, 300, 20, 20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale=0.15;
  
  //creating the ground
  ground = createSprite(275,335,550,60);
  ground.addImage(groundImage);
  ground.scale=1;
  //ground.debug=true;
  ground.setCollider("rectangle", 0,1.4,ground.width, 30);


  
}


function draw() {
background("skyblue");

  //creating a scrolling ground
  ground.velocityX=-4;
  if(ground.x<200) {
    ground.x=ground.width/2

  }
  
   if(keyDown("space")) {
    monkey.velocityY= -15;
    }
  

  //display survival time
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+score, 500, 500);
  
  stroke("dodgerblue")
  textSize(20)
  fill("black")
  textFont("Georgia")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 200,50)
  
  //add gravity
  monkey.velocityY = monkey.velocityY+1
  
  //stop monkey from falling down and colliding it to the stones
  monkey.collide(ground);

  //create banana sprites
  spawnbananas();

  //create obstacle sprites
  spawnobstacles();
  
  
  drawSprites();
}

function spawnbananas() {
  
  if(frameCount%80 === 0) {
    var banana = createSprite(600,200,20,20);
    banana.y=Math.round(random(60,180));
    //banana.debug=true
    banana.setCollider("rectangle", 0,0,500,300)
    banana.velocityX=-4;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }

}

function spawnobstacles() {
  
  if(frameCount%300 === 0) {
    var obstacle = createSprite(500,295,20,20)
    //obstacle.debug=true
    obstacle.setCollider("rectangle", -30, 0, 450,400)
    obstacle.x=Math.round(random(500,650))
    obstacle.velocityX=-4;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);

  }

}


