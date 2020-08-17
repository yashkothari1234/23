const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{

}

function setup() {
  createCanvas(800,400);
  
	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(400,390,width,20);
  ground2 = new Ground(400,240,700,20);
 



  box1 = new Box(400,190,40,40);
  box2 = new Box(450,190,40,40);
  box3 = new Box(500,199,40,40);
  box4= new Box(550,199,40,40);
  box5 = new Box(400,200,40,40);
  box6 = new Box(450,200,40,40);
  box7 = new Box(400,199,40,40);
  











  polygon = new Polygon(100,200,30,30);

  slingshot = new SlingShot(polygon.body,{x:100,y:130});
Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
 ground1.display(); 
ground2.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

  
  
polygon.display();

slingshot.display();




  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
  
      slingshot.attach(polygon.body);
  }
  }











