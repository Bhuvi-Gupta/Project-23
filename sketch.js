const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase, computer, playerBase, player;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase = new PlayerBase(width/1.5, random(450, height-300), 180, 150);
  player = new Player(width/1.5, playerBase.body.position.y - 153, 50, 180);
  computerBase = new ComputerBase(width/4, random(450, height-300), 180, 150);
  computer = new Computer(width/4, playerBase.body.position.y - 153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBase.display();
  player.display();
  computerBase.display();
  computer.display();

   //display Player and computerplayer


}
