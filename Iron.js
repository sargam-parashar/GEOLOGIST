class Iron{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
        }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 25;
    this.height = 50;
    World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
}