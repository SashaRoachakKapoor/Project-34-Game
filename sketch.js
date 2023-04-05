const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shrimpButton , shrimpButtonImg;
var meatButton , meatButtonImg;
var fishFoodButton , fishFoodButtonImg;
var shark , sharkImg; 
var turtle , turtleImg;

var ocean , oceanImg;
var score = 0

var sharksGroup , turtlesGroup 
// var fishesGroup

function preload(){

  oceanImg = loadImage("ocean.jpg");
  shrimpButtonImg = loadImage("shrimp button.png");
  meatButtonImg = loadImage("meat button.png");
  fishFoodButtonImg = loadImage("fish food button.png");
  fishFoodImg = loadImage("fish food.png");
  meatImg = loadImage("meat.png");
shrimpImg = loadImage("shrimp.png");
turtleImg = loadImage("turtle.png");
sharkImg = loadImage("shark.png");
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

shrimpButton = createSprite(100,100)
shrimpButton.addImage("shrimpButton",shrimpButtonImg)
shrimpButton.scale=0.1

meatButton = createSprite(250,100);
meatButton.addImage("meatButton",meatButtonImg);
meatButton.scale = 0.1

fishFoodButton = createSprite(400,100);
fishFoodButton.addImage("fishFoodButton",fishFoodButtonImg);
fishFoodButton.scale = 0.1

sharksGroup = new Group()
turtlesGroup = new Group()
 }

function draw() 
{
  background(51);
  image(oceanImg,0,0,width,height);
  Engine.update(engine);

 if(mousePressedOver(shrimpButton)){
  shrimps()
 }

 if(mousePressedOver(meatButton)){
  meats()
 }

 if(mousePressedOver(fishFoodButton)){
  fishFoods()
 }

 spawnSeaCreatures()

 drawSprites()
 
}

function shrimps(){
  if(frameCount % 10===0){
 shrimp =createSprite(100,100,10,10);
 shrimp.addImage(shrimpImg)
 shrimp.velocityY=2
 shrimp.lifetime=300
 shrimp.scale=0.1
  }
  }

  function meats(){
    if(frameCount % 10===0){
     meat = createSprite(250,100,10,10);
     meat.addImage(meatImg)
     meat.velocityY = 2
     meat.lifetime = 300
     meat.scale = 0.1
    }
  }

  function fishFoods(){
    if(frameCount % 10===0){
      fishFood = createSprite(400,100,10,10);
      fishFood.addImage(fishFoodImg);
      fishFood.velocityY = 2
      fishFood.lifetime = 300
      fishFood.scale = 0.1
    }
  }

  function spawnSeaCreatures(){
    if (frameCount % 150 === 0){
            var shark = createSprite(width,height-350,10,40);
            var turtle = createSprite (width,height-150,10,40);
            turtle.velocityX = -2
            //var fish = createSprite(width,height-250,10,40);
            shark.velocity = 2
            //fish.velocityX = -2;
   
var rand = Math.round(random(1,2));
switch(rand) {
case 1: turtle.addImage(turtleImg);

      break;
case 2: shark.addImage(sharkImg);

      break;


    

default: break; 
}

shark.scale = 0.20;
turtle.scale = 0.20;
turtle.lifetime = 300
shark.lifetime = 300
 //fish.lifetime = 300;

sharksGroup.add(shark)
turtlesGroup.add(turtle)
//fishesGroup.add(fish)
}
} 



