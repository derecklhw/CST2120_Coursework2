class Enemy extends Sprite {
  constructor() {
    super();
  }

  init(x, y, imageNumber) {
    this.fx.init();
    this.img = window.gui.getAsset(`enemy${imageNumber}-img`);

    this.scale = 0.15;
    this.width = this.img.width * this.scale;
    this.height = this.img.height * this.scale;

    this.position = {
      x: x,
      y: y,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update(xVelocity, yVelocity) {
    this.velocity.x = xVelocity;
    this.velocity.y = yVelocity;
    this.move();
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
