class Box {
  constructor(x, y, width, height){
     var options={
       restitution:0.4,
       friction:0.0,
     }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;

     this.height=height;
     World.add(world,this.body);
  }
  display(){
    var pos= this.body.position;
    var angle=this.body.angle;
    if(this.body.speed <3){
   
      push ();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("grey");
    fill ("blue");
    rect (0,0,this.width,this.height);
    pop ();
    }
    else{
      push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
     
    }
    
  }
  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
       score;
    } 
}
};
