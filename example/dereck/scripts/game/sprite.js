class Sprite {
  constructor() {
    this.fx = new Fx();
    this.img = null;

    this.scale = null;
    this.width = null;
    this.height = null;

    this.position = {
      x: 0,
      y: 0,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  render() {
    this.fx.drawEnemy(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  collideWith(sprite) {
    if (
      this.position.x + this.width > sprite.position.x &&
      this.position.x < sprite.position.x + sprite.width &&
      this.position.y + this.height > sprite.position.y &&
      this.position.y < sprite.position.y + sprite.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
