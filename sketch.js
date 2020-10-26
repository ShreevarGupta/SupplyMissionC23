var helicopterImg, helicopterSprite, packageSprite, packageImg;
var packageBody, ground;
var box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload() {

	helicopterImg=loadImage("helicopter.png");
	packageImg=loadImage("package.png");

}


function setup() {

	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImg);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale = 0.6;

	boxSprite1 = createSprite(width/2,height-40,200,20);
	boxSprite1.shapeColor = "red";

	boxSprite2 = createSprite(300,height-80,20,100);
	boxSprite2.shapeColor = "red";

	boxSprite3 = createSprite(500,height-80,20,100);
	boxSprite3.shapeColor = "red";

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.01, isStatic:true});
	World.add(world, packageBody);

	box = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, box);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	
	Engine.update(engine);

	background(0);
	
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

	drawSprites();
 
}


function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}

}

