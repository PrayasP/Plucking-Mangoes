
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObj = new Tree(1000-50,414);

	GroundObj = new Ground(600,690,1200,20);

	StoneObj = new Stone(235,420,30);

	StringObj = new String(StoneObj.body,{x:192,y:535});	

	mango1=new Mango(800-15,300+10,30);
    mango2=new Mango(850,250,30);
	mango3=new Mango(970,180,30);
	mango4=new Mango(1030,245,30);
	mango5=new Mango(1100,250,30);
	mango6=new Mango(900,200,30);
	mango7=new Mango(900+50+20,200+54,40);
	mango8=new Mango(900+50-41-25-21,200+54+20+40+10,40);
	mango9=new Mango(900+50-41-25-21,200+54+20+40+10,40);
	mango10=new Mango(900+50-41-25-21+80,200+54+20+40+10,40);
	mango11=new Mango(900+50-41-25-21+80+70+10,200+54+20+40+10-4+20,40);
	mango12=new Mango(900+50-41-25-21+80+70+77-11+50,200+54+20+40+10-4+20,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#FFFFFF");

  treeObj.display();

  GroundObj.display();

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  image(boyImg,150,445,250/1.2,400/1.2);

  StringObj.display();
  
  StoneObj.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  mango8.display();

  mango9.display();

  mango10.display();

  mango11.display();
  
  mango12.display();

  detectCollision(StoneObj,mango1);
  detectCollision(StoneObj,mango2);
  detectCollision(StoneObj,mango3);
  detectCollision(StoneObj,mango4);
  detectCollision(StoneObj,mango5);
  detectCollision(StoneObj,mango6);
  detectCollision(StoneObj,mango7);
  detectCollision(StoneObj,mango8);
  detectCollision(StoneObj,mango9);
  detectCollision(StoneObj,mango10);
  detectCollision(StoneObj,mango11);
  detectCollision(StoneObj,mango12);

  drawSprites();

  keyPressed();
 
}

function mouseDragged(){
	Matter.Body.setPosition(StoneObj.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	StringObj.fly();
}

function keyPressed(){
	if(keyDown("space")){
		Matter.Body.setPosition(StoneObj.body,{x:150,y:445});
		StringObj.attach(StoneObj.body);
	}
}

function detectCollision(Lstone,Lmango){

	var StonePos = Lstone.body.position;
	var MangoPos = Lmango.body.position;

	var distance = dist(StonePos.x,StonePos.y,MangoPos.x,MangoPos.y);

	if(distance <= Lstone.r + Lmango.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}



