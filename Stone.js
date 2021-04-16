class Stone{
    constructor(x,y){
        var options ={
            'restitution':0.8,
            'friction':0.9,
            "density":12
        }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
}