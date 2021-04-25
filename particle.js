class Particle{
    constructor(x,y,r){
     var option = {
         isStatic:false,
         restitution:0.3
     }
     this.r = r;
     this.body = Bodies.circle(x,y,r);
     this.color = color(random(0,255),random(0,255),random(0,255));
     World.add(world,this.body);



    }
   display(){
     var position = this.body.position;
     var angle = this.body.angle;
       
     push();
     translate(position.x,position.y);
     rotate(angle);
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
      
     pop(); 



   }
   

}