let tball2;
let ui;
let tball = [];
function setup() {
  createCanvas(400, 400);
  test_ball = new Test_ball();
  test_ball2 = new Test_ball();
  ui = new UI();
  //mousepush = new Mousepush(); 
  //tball2 = new Test_ball();
}
   function keyTyped() {
     if (key === ' ') {
       tball.push(new Test_ball(mouseX, mouseY));
     }
     
    if (key === 'a') {
      rectangle.push(new Rectangle(mouseX, mouseY));
  }
}
var a = 10;
function draw() {
  background(220);
  rect(0,395,400,20);
  ui.display();
  //mousepush.display();
  //mousepush.update();
  //frame rate limit DO NOT TUCH UNLESS YOU WANT LESS FRAMES THE GAME WILL LAG VERY BAD IF YOU DONT HAVE THIS
  var fr = 60;
  frameRate(fr);
  

  
  
  let gravity = createVector(0, u);
  
 // tball2.display();
  //tball2.update();
  //tball2.applyForce(gravity);
  //tball2.edges();
  
  ui.button();
  
  for(let i = 0; i < tball.length; i++) {
    tball[i].applyForce(gravity);
    tball[i].update();
    tball[i].display();
    tball[i].edges();
    for(let q = 0; q < tball.length; q++) {
      if (i != q) {
        tball[i].collide(tball[q]);
      }
    }
  }
}