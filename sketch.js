const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob1_options={
		restitution: 0.8
	  }
	   var bob2_options={
		 restitution: 0.8
	   }
	   var bob3_options={
		restitution: 0.8
	  }
	   var bob4_options={
		 restitution: 0.8
	   }
	   var bob5_options={
		restitution: 0.8
	  }


	bob1 = Bodies.circle(500,20,10,bob1_options);
	World.add(world,bob1);
	//bob2 = Bodies.circle(250,40,10,bob2_options);
	//World.add(world,bob2);
//	bob2 = Bodies.circle(300,30,10,bob3_options);
   // World.add(world,bob3);
	//bob2 = Bodies.circle(350,20,10,bob4_options);
//	World.add(world,bob4);
//	bob2 = Bodies.circle(400,10,10,bob5_options);
//	World.add(world,bob5);
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
