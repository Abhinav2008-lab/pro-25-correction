class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.rectangle(x,y,20,options);
        this.r = 20;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        circle(0,0,50),
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}