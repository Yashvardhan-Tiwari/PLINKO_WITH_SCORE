class pin {
    constructor(x,y,w,h) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = width;
      this.h = height;
      this.x = x;
      this.y = y;
      this.image = loadImage("pin")
      World.add(world, this.body);
    }
    display(){
     imageMode(CENTER);
     image(this.image,this.x,this.y,this.w,this.h);
    }
  };