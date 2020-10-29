var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	var package_options={
		restitution: 3,
		isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	
	var ground_options ={
		isStatic:true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
	World.add(world, ground);
	keyPressed();
	Engine.run(engine);
}

function draw() {
	background(0);
	rectMode(CENTER);
	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;
	drawSprites();
	packageSprite.display();
	helicopterSprite.display();
	Engine.update(engine);
}

function keyPressed() {
	if(keyWentDown("S")) {
		//Matter.packageBody.setRestitution = 0.8;
		//Matter.packageBody.setStatic = false;
		package_options ={
			isStatic: false,
			restitution: 0.8
		}
	}
}