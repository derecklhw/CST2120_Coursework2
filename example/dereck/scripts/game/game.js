class Game {
  constructor() {
    this.mode = null;
    this.fx = new Fx();
    this.playerProjectileController = new ProjectileController(
      this.fx,
      5,
      "red",
      true,
      "circle"
    );
    this.enemyProjectileController = new ProjectileController(
      this.fx,
      10,
      "white",
      true,
      "rectangle"
    );
    this.score = 0;
    this.particleController = new ParticleController();
    this.player = new Player(this.playerProjectileController);
    this.enemiesGrid = new EnemiesGrid(
      this.enemyProjectileController,
      this.playerProjectileController,
      this.particleController,
      this.score,
      this.player
    );
    this.isGameOver = false;
    this.isWin = false;
    this.explosionPlayerSound = null;
    this.userCurrentlyLogin = JSON.parse(
      localStorage[sessionStorage.loggedInUserEmail]
    );
  }

  init(mode) {
    console.log("game initializing...");
    this.mode = mode;
    this.fx.init();
    this.playerProjectileController.init();
    this.enemyProjectileController.init();
    this.particleController.init();
    this.player.init(5);
    this.enemiesGrid.init(mode);
    this.explosionPlayerSound = window.gui.getAsset("explosion-player-audio");
    this.explosionPlayerSound.volume = 0.5;
    this.scoreElement = document.getElementById("scoreElement");
  }

  resize() {
    console.log("game resizing...");
  }

  update() {
    this.playerProjectileController.update();
    this.enemyProjectileController.update();
    this.particleController.update();
    this.player.update();
    this.enemiesGrid.update();
    this.score = this.enemiesGrid.getScore();
    this.scoreElement.innerHTML = this.score;
    this.checkGameOver();
  }

  render() {
    this.fx.fillCanvas("#000");
    let particle = new Particle(
      {
        x: Math.random() * this.fx.canvas.width,
        y: Math.random() * this.fx.canvas.height,
      },
      { x: 0, y: 1 },
      Math.random() * 5,
      "white"
    );
    particle.init();
    this.particleController.collection.push(particle);

    if (!this.isGameOver) {
      this.playerProjectileController.render();
      this.enemyProjectileController.render();
      this.particleController.render();
      this.player.render();
      this.enemiesGrid.render();
    } else if (this.isGameOver && !this.isWin) {
      this.timePlayed = window.gui.stopGame();
      this.isWin = false;
      this.isGameOver = false;
      this.score /= 2;

      this.userCurrentlyLogin.score += this.score;
      localStorage.setItem(
        sessionStorage.loggedInUserEmail,
        JSON.stringify(this.userCurrentlyLogin)
      );

      this.score = 0;
      this.enemiesGrid.scoreTotal = 0;
      this.scoreElement.innerHTML = this.score;
      console.log("lose");
    } else if (this.isGameOver && this.isWin) {
      this.timePlayed = window.gui.stopGame();
      this.isWin = false;
      this.isGameOver = false;

      this.userCurrentlyLogin.score += this.score;
      localStorage.setItem(
        sessionStorage.loggedInUserEmail,
        JSON.stringify(this.userCurrentlyLogin)
      );

      this.score = 0;
      this.enemiesGrid.scoreTotal = 0;
      this.scoreElement.innerHTML = this.score;

      console.log("win");
    }
  }

  checkGameOver() {
    if (this.isGameOver) {
      return;
    }

    if (this.enemyProjectileController.collideWith(this.player)) {
      this.playerKilled();
    }

    if (this.enemiesGrid.collideWith(this.player)) {
      this.playerKilled();
    }

    if (this.mode === "hard") {
      if (this.enemiesGrid.bossCollideWithPlayer()) {
        this.playerKilled();
      }
    }

    if (
      this.enemiesGrid.enemyRows.length === 0 &&
      this.enemiesGrid.enemyBossRows.length === 0
    ) {
      this.isWin = true;
      this.isGameOver = true;
    }
  }

  playerKilled() {
    this.explosionPlayerSound.currentTime = 0;
    this.explosionPlayerSound.play();
    this.isGameOver = true;
  }
}
