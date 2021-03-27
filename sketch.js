var dog,sadDog,happyDog;
var gameState=0;
var dogCount;
var position,database;
var form,game;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
    
  createCanvas(1000,400);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food=new Food(400,200,40/2);
  food.getState();
  food.start();
}

function draw() {
  background(46,139,87);


  
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
