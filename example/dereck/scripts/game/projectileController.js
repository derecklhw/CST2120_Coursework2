class ProjectileController {
  constructor(fx, maxProjectiles, projectileColor, sound, projectileForm) {
    this.fx = fx;
    this.maxProjectiles = maxProjectiles;
    this.projectileColor = projectileColor;
    this.sound = sound;
    this.projectileForm = projectileForm;
    this.audio = null;
    this.collection = [];
    this.timeTillNextProjectilesAllowed = 0;
  }

  init() {
    this.audio = window.gui.getAsset("shoot-audio");
    this.audio.volume = 0.5;
    this.collection = [];
    this.timeTillNextProjectilesAllowed = 0;
  }

  update() {
    if (this.timeTillNextProjectilesAllowed > 0) {
      this.timeTillNextProjectilesAllowed--;
    }
    this.collection.forEach((projectile) => projectile.update());
    this.rechargeProjectiles();
  }

  render() {
    this.collection.forEach((projectile) => projectile.render());
  }

  fire(x, y, velocity, timeTillNextProjectilesAllowed = 0) {
    if (
      this.timeTillNextProjectilesAllowed <= 0 &&
      this.collection.length < this.maxProjectiles
    ) {
      const projectile = new Projectile(
        this.fx,
        x,
        y,
        velocity,
        this.projectileColor,
        this.projectileForm
      );
      this.collection.push(projectile);
      if (this.sound) {
        this.audio.currentTime = 0;
        this.audio.play();
      }

      this.timeTillNextProjectilesAllowed = timeTillNextProjectilesAllowed;
    }
  }

  rechargeProjectiles() {
    this.collection = this.collection.filter(
      (projectile) =>
        projectile.y + projectile.radius > 0 &&
        projectile.y <= this.fx.canvas.height
    );
  }

  /**
   * Check projectile index which hits the sprite  and return a boolean
   * @param {*} sprite
   * @returns
   */
  collideWith(sprite) {
    const projectileHitSpriteIndex = this.collection.findIndex((projectile) =>
      projectile.collideWith(sprite)
    );

    if (projectileHitSpriteIndex >= 0) {
      this.collection.splice(projectileHitSpriteIndex, 1);
      return true;
    }
    return false;
  }
}
