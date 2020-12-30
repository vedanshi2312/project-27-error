
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 //Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground); 

	//Create the Bodies Here.
  bob1 = new bob(200,200,80,80);
  bob2 = new bob(300,200,80,80);
  bob3 = new bob(400,200,80,80);
  bob4 = new bob(500,200,80,80);
  bob5 = new bob(600,200,80,80);
  roof1 = new roof(400,100,600,50);
  rope1 = new rope(100,300,100,100);
  rope2 = new rope(200,300,100,100);
  rope3 = new rope(300,300,100,100);
  rope4 = new rope(400,300,100,100);
  rope5 = new rope(500,300,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



