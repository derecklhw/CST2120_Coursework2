class Projectile {
  constructor(fx, x, y, velocity, color, form) {
    this.fx = fx;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.color = color;
    this.form = form;
    this.radius = 3;
    this.width = 5;
    this.height = 20;
  }

  init() {}
  update() {
    this.y -= this.velocity;
  }
  render() {
    if (this.form == "circle") {
      this.fx.drawCircle(this.x, this.y, this.radius, this.color);
    } else if (this.form == "rectangle") {
      this.fx.drawRect(this.x, this.y, this.width, this.height, this.color);
    }
  }
  collideWith(sprite) {
    if (this.form == "circle") {
      if (
        this.x + this.radius > sprite.position.x &&
        this.x < sprite.position.x + sprite.width &&
        this.y + this.radius > sprite.position.y &&
        this.y < sprite.position.y + sprite.height
      ) {
        return true;
      } else {
        return false;
      }
    } else if ((this.form = "rectangle")) {
      if (
        this.x + this.width > sprite.position.x &&
        this.x < sprite.position.x + sprite.width &&
        this.y + this.height > sprite.position.y &&
        this.y < sprite.position.y + sprite.height
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}
