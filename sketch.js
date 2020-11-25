var ground,block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var ground2,block17,block18,block19,block20,block21,block22,block23,block24;
var block25;
var polygon,slingShot,polygonIMG,ball;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint = Matter.Constraint;


var engine,world;
var score=0;

function preload(){
polygonIMG=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
 
  ground=new Ground(390,300,270,10);
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
  ground2 = new Ground(700,200,200,10)
  block17 = new Box(640,175,30,40);
  block18= new Box(670,175,30,40);
  block19 = new Box (700,175,30,40);
  block20 = new Box(730,175,30,40);
  block21= new Box(760,175,30,40);
  block22 = new Box(670,135,30,40);
  block23 = new Box(700,135,30,40);
  block24= new Box(730,135,30,40);
  block25 = new Box(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});

  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",120,30);

  text("score: "+score,120,200);
}
  function draw () {
    background(255,255,255); 
   
    
  
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    ground2.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score(); 
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block21.score();
    block22.score();
    block23.score();  
    block24.score();  
    block25.score();
    fill("red");
    textSize(20);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    fill("red");
    textSize(20);
    text("press 'space' to get another chance to play!!!",520,300);
    imageMode(CENTER)
    image(polygonIMG ,ball.position.x,ball.position.y,80,80);
    slingShot.display();
    text("score: "+score,300,200);
  }

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
     
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
}
