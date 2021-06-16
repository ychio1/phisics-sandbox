class Test_ball {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(6), random(8));
    this.acc = createVector(0, 0);
    this.distance = 0;
    this.col = 0;
    this.mass = random(-1,1)
  }

  applyForce(force) {
    this.acc.add(force);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    //this.vel.mult(this.mass);
  }
  display() {
    
    fill(this.col);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 60, 60);
    //line(this.pos.x, this.pos.y, tball2.pos.x, tball2.pos.y);
    //console.log(floor(this.distance));
    //if (floor(this.distance%400) <  floor(30%400)) {
      //console.log("detected")
    //} else {console.log("nothing")} 
    
  }

  collide(o) {
    this.distance = (this.pos.x-o.pos.x)**2+(this.pos.y-o.pos.y)**2;
    o.distance = (o.pos.x-this.pos.x)**2+(o.pos.y-this.pos.y)**2;
        //console.log(sqrt(this.distance));
    if ( 
      sqrt(this.distance) < 60 &&
      sqrt(o.distance) < 60
    ) {
      
      /*
      var k = 60 - sqrt(this.distance);
      var l = 60 - sqrt(o.distance);
      this.pos.x += k
      this.pos.y += k
      o.pos.x += l
      o.pos.y += l
      */
      
      //console.log(k);
      
      o.vel.x = -this.vel.y //* this.mass
      o.vel.y = -this.vel.x //* this.mass
      o.acc.x = -this.acc.y
      o.acc.y = -this.acc.x
      
      this.vel.x = -o.vel.y //* this.mass
      this.vel.y = -o.vel.x //* this.mass
      this.acc.x = -o.acc.y
      this.acc.y = -o.acc.x
      
      
    }
  }
  /*drag() {
    if (
      mouseIsPressed == true &&
      mouseX >= this.pos.x &&
      mouseX <= this.pos.x + 50 &&
      mouseY >= this.pos.y &&
      mouseY <= this.pos.y + 50
    ) {
      this.pos.x = mouseX;
      this.pos.y = mouseY;
      
      this.vel.x = 0;
      this.vel.x = 0;
      this.acc.y = 0;
      this.acc.y = 0;
      
    }
    
  }
  */

  edges() {
    if (this.pos.y > height - 32) {
      this.vel.y = -this.vel.y;
      if (this.vel.y === 0) {
        this.vel.y = 0 - 5;
      }
      this.pos.y = height - 32;
    }
    if (this.pos.x > 400 - 32 || this.pos.x < 0 + 32) {
      
      this.vel.x = -this.vel.x;
      
      if (this.vel.x === 0) {
        this.vel.x = 0 - 5;
      }
    }
        if (this.pos.y < height - 368) {
      this.vel.y = -this.vel.y;
      if (this.vel.y === 0) {
        this.vel.y = 0 - 5;
      }
      this.pos.y = height - 368;
    }
    if (this.pos.y < height - 368) {
      this.vel.y = -this.vel.y;
    }
  }
}
