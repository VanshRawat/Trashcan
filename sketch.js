
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var trash;
var img,img1;

function preload(){
   img1=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,700,width,40);
	dustbinObj=new dustbin(1200,650);

	trash=new Paper(200,650,70,70);

	img=createSprite(1200,550);
    img.addImage(img1);
    img.scale=0.7;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  trash.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(trash.body,trash.body.position, {x:170,y:-100});
	}
}
