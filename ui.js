var u = 0.5;
class UI {
  constructor() {
    this.pos = createVector(200, 200);
  }
  display() {
    fill(0);
    rect(this.pos.x + 100, this.pos.y - 170, 20, 20);
    rect(this.pos.x + 150, this.pos.y - 170, 20, 20);
    rect(this.pos.x + 125, this.pos.y - 170, 20, 20);
    fill("white");
    line(
      this.pos.x + 150,
      this.pos.y - 160,
      this.pos.x + 170,
      this.pos.y - 160
    );
    line(
      this.pos.x + 100,
      this.pos.y - 160,
      this.pos.x + 120,
      this.pos.y - 160
    );
    line(
      this.pos.x + 110,
      this.pos.y - 170,
      this.pos.x + 110,
      this.pos.y - 150
    );
    fill("black");
    text("gravity:" + round(u), 320, 20);
    fill("white");
    text("0g", 328, 45);
  }

  button() {
    if (
      mouseIsPressed &&
      mouseX > this.pos.x + 100 &&
      mouseX < this.pos.x + 20 + 100 &&
      mouseY > this.pos.y - 170 &&
      mouseY < this.pos.y - 170 + 20
    ) {
      u += 0.1;
    }
    if (
      mouseIsPressed &&
      mouseX > this.pos.x + 150 &&
      mouseX < this.pos.x + 20 + 150 &&
      mouseY > this.pos.y - 170 &&
      mouseY < this.pos.y - 170 + 20
    ) {
      u -= 0.1;
    }
    if (
      mouseIsPressed &&
      mouseX > this.pos.x + 125 &&
      mouseX < this.pos.x + 20 + 125 &&
      mouseY > this.pos.y - 170 &&
      mouseY < this.pos.y - 170 + 20
    ) {
      if (u > 0) {
        u -= u;
      } else if (u < 0) {
        u += -u;
      }
    }
  }
}
