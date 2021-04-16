const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(400, 200);
    iron = new Iron(500, 200);
    rubber1 = new Rubber(800,200, 50);
    rubber2 = new Rubber(780, 200, 10);
    rubber3 = new Rubber(760, 200, 10);
    rubber4 = new Rubber(740, 200, 10);
    rubber5 = new Rubber(720, 200, 10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    

    

    
 
}