class Box {
    constructor(x,y,width,height) {
      var options = {
        friction:2,
        restitution:0.04,
        density:5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){


      if(this.body.speed<3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
            }
            else{
              World.remove(world,this.body);
              push();
              this.Visibility = this.Visibility-5;
              tint(255,this.Visibility);
             this.body.position.x,this.body.position.y;
              pop();
            }
    }
  };