const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(200, 100, 60, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}