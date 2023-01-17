const MovingDirection = {
  left: 0,
  right: 1,
  downLeft: 2,
  downRight: 3,
};

class EnemiesGrid {
  enemyMap = [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  ];

  enemyRows = [];
  enemyBossRows = [];

  currentDirection = MovingDirection.right;
  xVelocity = 0;
  yVelocity = 0;
  defaultXVelocity = 1;
  defaultYVelocity = 1;
  moveDownTimerDefault = 30;
  moveDownTimer = this.moveDownTimerDefault;
  fireProjectileTimerDefault = 100;
  fireProjectileTimer = this.fireProjectileTimerDefault;

  constructor(
    enemyProjectileController,
    playerProjectileController,
    particleController,
    score,
    player
  ) {
    this.fx = new Fx();
    this.enemyProjectileController = enemyProjectileController;
    this.playerProjectileController = playerProjectileController;
    this.particleController = particleController;
    this.scoreTotal = score;
    this.player = player;
    this.enemyBoss = null;
    this.enemyDeathSound = null;
    this.enemyBossDeathSound = null;
    this.scoreEnemy = 100;
    this.scoreEnemyBoss = 500;
    this.killEnemyBossCount = 0;
  }

  init(mode) {
    this.mode = mode;
    this.fx.init();
    this.enemyDeathSound = window.gui.getAsset("enemy-death-audio");
    this.enemyDeathSound.volume = 0.5;
    this.enemyBossDeathSound = window.gui.getAsset("enemy-boss-death-audio");
    this.enemyBossDeathSound.volume = 0.5;
    this.killEnemyBossCount = 5;
    this.createEnemies();
    if (this.mode === "hard") {
      this.createBoss();
    }
  }

  update() {
    this.decrementMoveDownTimer();
    this.updateVelocityAndDirection();
    this.playerEnemyCollisionDetection();
    this.playerEnemyBossCollisionDection();
    this.resetMoveDownTimer();
    this.enemyRows
      .flat()
      .forEach((enemy) => enemy.update(this.xVelocity, this.yVelocity));
    if (this.mode === "hard") {
      this.enemyBossRows.flat().forEach((enemyBoss) => enemyBoss.update());
    }
  }

  render() {
    this.enemyRows.flat().forEach((enemy) => enemy.render());
    this.fireProjectile();
    if (this.mode === "hard") {
      this.enemyBossRows.flat().forEach((enemyBoss) => enemyBoss.render());
    }
  }

  createEnemies() {
    this.enemyMap.forEach((row, rowIndex) => {
      this.enemyRows[rowIndex] = [];
      row.forEach((enemyNumber, enemyIndex) => {
        if (enemyNumber > 0) {
          let enemy = new Enemy();
          enemy.init(enemyIndex * 75, rowIndex * 53, enemyNumber);
          this.enemyRows[rowIndex].push(enemy);
        }
      });
    });
  }

  createBoss() {
    this.enemyBossRows = [];
    if (this.enemyRows.length <= 6) {
      this.enemyBoss = new EnemyBoss(this.player);
      this.enemyBoss.init();
      this.enemyBossRows.push(this.enemyBoss);
    }
  }

  decrementMoveDownTimer() {
    if (
      this.currentDirection === MovingDirection.downLeft ||
      this.currentDirection === MovingDirection.downRight
    ) {
      this.moveDownTimer--;
    }
  }

  resetMoveDownTimer() {
    if (this.moveDownTimer <= 0) {
      this.moveDownTimer = this.moveDownTimerDefault;
    }
  }

  updateVelocityAndDirection() {
    for (const enemyRow of this.enemyRows) {
      if (this.currentDirection == MovingDirection.right) {
        this.xVelocity = this.defaultXVelocity;
        this.yVelocity = 0;
        const rightMostEnemy = enemyRow[enemyRow.length - 1];
        if (
          rightMostEnemy.position.x + rightMostEnemy.width >=
          this.fx.canvas.width
        ) {
          this.currentDirection = MovingDirection.downLeft;
          break;
        }
      } else if (this.currentDirection == MovingDirection.downLeft) {
        if (this.moveDown(MovingDirection.left)) {
          break;
        }
      } else if (this.currentDirection == MovingDirection.left) {
        this.xVelocity = -this.defaultXVelocity;
        this.yVelocity = 0;
        const leftMostEnemy = enemyRow[0];
        if (leftMostEnemy.position.x <= 0) {
          this.currentDirection = MovingDirection.downRight;
          break;
        }
      } else if (this.currentDirection == MovingDirection.downRight) {
        if (this.moveDown(MovingDirection.right)) {
          break;
        }
      }
    }
  }

  moveDown(newDirection) {
    this.xVelocity = 0;
    this.yVelocity = this.defaultYVelocity;
    if (this.moveDownTimer <= 0) {
      this.currentDirection = newDirection;
      return true;
    }
    return false;
  }

  fireProjectile() {
    this.fireProjectileTimer--;
    if (this.fireProjectileTimer <= 0) {
      this.fireProjectileTimer = this.fireProjectileTimerDefault;
      const allEnemies = this.enemyRows.flat();
      const randomEnemyIndex = Math.floor(Math.random() * allEnemies.length);
      const randomEnemy = allEnemies[randomEnemyIndex];
      this.enemyProjectileController.fire(
        randomEnemy.position.x,
        randomEnemy.position.y,
        -5
      );
    }
  }

  playerEnemyCollisionDetection() {
    this.enemyRows.forEach((enemyRow) => {
      enemyRow.forEach((enemy, enemyIndex) => {
        if (this.playerProjectileController.collideWith(enemy)) {
          let particle = new Particle(
            enemy.position,
            { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 },
            Math.random() * 10,
            "red"
          );
          this.particleController.collection.push(particle);
          particle.init();

          this.enemyDeathSound.currentTime = 0;
          this.enemyDeathSound.play();
          enemyRow.splice(enemyIndex, 1);
          this.scoreTotal += this.scoreEnemy;
        }
      });
    });
    this.enemyRows = this.enemyRows.filter((enemyRow) => enemyRow.length > 0);
  }

  playerEnemyBossCollisionDection() {
    this.enemyBossRows.forEach((enemyBoss, enemyBossIndex) => {
      if (this.playerProjectileController.collideWith(enemyBoss)) {
        let particle = new Particle(
          enemyBoss.position,
          { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 },
          Math.random() * 10,
          "red"
        );
        this.particleController.collection.push(particle);
        particle.init();

        this.enemyBossDeathSound.currentTime = 0;
        this.enemyBossDeathSound.play();

        this.killEnemyBossCount--;
        if (this.killEnemyBossCount == 0) {
          this.enemyBossRows.splice(enemyBossIndex, 1);
          this.scoreTotal += this.scoreEnemyBoss;
        }
      }
    });
  }

  bossCollideWithPlayer() {
    if (this.enemyBoss.collideWith(this.player)) {
      return true;
    }
  }

  collideWith(sprite) {
    return this.enemyRows.flat().some((enemy) => enemy.collideWith(sprite));
  }

  getScore() {
    return this.scoreTotal;
  }
}
