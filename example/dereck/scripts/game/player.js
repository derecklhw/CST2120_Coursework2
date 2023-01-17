class Player extends Sprite {
  pressedRight = false;
  pressedLeft = false;
  pressedShot = false;

  constructor(playerProjectileController) {
    super();
    this.rotation = null;
    this.shootSound = null;
    this.playerProjectileController = playerProjectileController;
  }

  init(XVelocity) {
    this.fx.init();
    this.img = window.gui.getAsset("player-img");
    this.shootSound = window.gui.getAsset("shoot-audio");

    this.scale = 0.1;
    this.width = this.img.width * this.scale;
    this.height = this.img.height * this.scale;

    this.position = {
      x: this.fx.canvas.width / 2 - this.width / 2,
      y: this.fx.canvas.height - this.height - 10,
    };

    this.velocity = {
      x: XVelocity,
      y: 0,
    };
    this.rotation = 0;

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.pressedRight = true;
          this.eventPreventDefault(event);
          break;
        case "d":
          this.pressedRight = true;
          this.eventPreventDefault(event);
          break;
        case "ArrowLeft":
          this.pressedLeft = true;
          this.eventPreventDefault(event);
          break;
        case "a":
          this.pressedLeft = true;
          this.eventPreventDefault(event);
          break;
        case " ":
          this.pressedShot = true;
          this.eventPreventDefault(event);
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowRight":
          this.pressedRight = false;
          break;
        case "d":
          this.pressedRight = false;
          break;
        case "ArrowLeft":
          this.pressedLeft = false;
          break;
        case "a":
          this.pressedLeft = false;
          break;
        case " ":
          this.pressedShot = false;
          break;
      }
    });
  }

  eventPreventDefault(event) {
    {
      if (event.target == document.body) {
        event.preventDefault();
      }
    }
  }

  update() {
    if (this.pressedShot) {
      this.playerProjectileController.fire(
        this.position.x + this.width / 2,
        this.position.y,
        5,
        10
      );
    }
    this.moveAndWallCollision();
  }

  render() {
    this.fx.drawPlayer(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      this.rotation
    );
  }

  moveAndWallCollision() {
    if (
      this.pressedRight &&
      this.position.x < this.fx.canvas.width - this.width
    ) {
      this.position.x += this.velocity.x;
      this.rotation = +0.15;
    } else if (this.pressedLeft && this.position.x > 0) {
      this.position.x -= this.velocity.x;
      this.rotation = -0.15;
    } else {
      this.rotation = 0;
    }
  }
}
