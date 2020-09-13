class Paper {

constructor (x,y,radius) {
 var options = {
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:1.2
 }

 this.body = Bodies.circle(x,y,radius,options);
 World.add(world,this.body);
}

display(){
    var poss =this.body.position;
    var anglee = this.body.angle;

    push();
    translate(poss.x, poss.y);
    rotate(anglee);
    
    strokeWeight(8);
    stroke("red");

    ellipseMode(RADIUS);
    ellipse(0 , 0 , this.radius,this.radius);
    fill("blue");

    
    pop();
  }

};