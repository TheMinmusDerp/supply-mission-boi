var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxside1, boxside2, boxside3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	World.add(world, groundSprite);*/
	engine = Engine.create();
	world = engine.world;
	var package_options={
		restitution: 0.5,
		friction: 0.5,
		isStatic: true
	}

	boxside1 = new BoxSide(200,0,200,20);
	boxside2 = new BoxSide(100,50,20,100);
	boxside3 = new BoxSide(300,50,20,100);

	World.add(world, boxside1);
	World.add(world, boxside2);
	World.add(world, boxside3);

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	
	var ground_options ={
		isStatic: true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options);
	World.add(world, ground);
	Engine.run(engine);
}

function draw() {
	background(0);
	rectMode(CENTER);
	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;
	drawSprites();
	boxside1.display();
	boxside2.display();
	boxside3.display();
	Engine.update(engine);
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		//Matter.packageBody.setRestitution = 0.8;
		//Matter.packageBody.setStatic = false;
		Matter.Body.setStatic(packageBody,false);
		Matter.Body.setRestitution(packageBody,0.8)
	}
}