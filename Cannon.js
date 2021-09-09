class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon = loadImage("assets/cannon.png")
    this.cannon_base = loadImage("assets/cannonBase.png")
  }
  display() {
    push();
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.cannon,0,0,this.width,this.height)
    pop();
    image(this.cannon_base,70,30,200,200)

  }
}
