var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300, 400,);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.3;

  doorsGroup = new Group; 
  climbersGroup = new Group;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    ghost.y = ghost.y + 5;

    if(keyDown("up")){
      ghost.y = ghost.y - 10;
    }

    if(keyDown("right")){
      ghost.x = ghost.x + 10;
    }

    if(keyDown("left")){
      ghost.x = ghost.x - 10;
    }

    createDoor();

    if(ghost.y > 400){
      climbersGroup.velocityYEach = 0;
      doorsGroup.velocityYEach = 0;
      climbersGroup.lifetimeEach = -1;
      doorsGroup.lifetimeEach = -1;
    }

    drawSprites();
}

function createDoor() {
  if(frameCount%80 === 0){
  door = createSprite(random(100, 500), 0);
  climber = createSprite(200, 200);
  door.addImage("door", doorImg);
  climber.addImage("climber", climberImg);
  door.velocityY = 3;
  climber.velocityY = 3;

  climber.x = door.x
  climber.y = door.y + 50;

  door.lifetime = 350;
  climber.lifetime = 350;
  doorsGroup.add(door);
  climbersGroup.add(climber);
  }

}