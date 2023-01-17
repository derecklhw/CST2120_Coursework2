class EnemyBoss extends Sprite {
  constructor(player) {
    super();

    this.player = player;
  }

  init() {
    this.fx.init();
    this.img = window.gui.getAsset("enemy-boss-img");

    this.scale = 0.2;
    this.width = this.img.width * this.scale;
    this.height = this.img.height * this.scale;

    this.position = {
      x: this.fx.canvas.width / 2 - this.width / 2,
      y: 0,
    };

    this.velocity = {
      x: 3.75,
      y: 1,
    };
  }

  update() {
    this.move();
  }

  move() {
    this.position.y += this.velocity.y;

    if (this.position.x < this.player.position.x - this.player.width) {
      this.position.x += this.velocity.x;
    } else if (this.position.x > this.player.position.x - this.player.width/2) {
      this.position.x -= this.velocity.x;
    }
  }
}
