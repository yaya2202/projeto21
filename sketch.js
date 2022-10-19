const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola, chao;
var left, right;
var btn;

function setup() {
	createCanvas(5000, 700);
	engine = Engine.create();
	world = engine.world;
	var bola_op = {
        restitution:0.8,
        frictionAir:0.01
    };
	//Create the Bodies Here.
	bola = Bodies.circle(350,10,20,bola_op);
	World.add(world,bola);
	var chao_op = {
        isStatic:true
    };
	chao = Bodies.rectangle(300,650,width,20,chao_op);
	World.add(world,chao);

	left = new Box(1200,540,20,200,"yellow");
    right = new Box(1450,540,20,200,"yellow");

	btn = createImg("up.png");
    btn.position(1000,50);
    btn.size(50,50);
    btn.mouseClicked(vForce);
	Engine.run(engine);
  
	rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);

  	ellipse(bola.position.x,bola.position.y,40);
	push();
    fill("yellow");
    rect(chao.position.x,chao.position.y,width,20);
    pop();
	left.show();
    right.show();
 
}

function vForce(){
    Body.applyForce(bola,{x:0,y:0},{x:0.01,y:-0.01});
}
