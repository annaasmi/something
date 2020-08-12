class Paper{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:0.8,
          friction:0.5,
          density:2.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("images/paper.png");
      World.add(world,this.body); 
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      ellipse(0,0,this.width,this.height);
      pop();
    }
}