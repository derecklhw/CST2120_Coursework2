class GameLoop {
  constructor(game) {
    this.loop = null;
    this.game = game;
    this.fps = 1000 / 60;
  }

  start(mode) {
    this.init(mode);
    this.loop = setInterval(() => {
      this.update();
      this.render();
    }, this.fps);
  }

  stop() {
    clearInterval(this.loop);
  }

  init(mode) {
    if (this.game) {
      this.game.init(mode);
    }
  }

  resize() {
    if (this.game) {
      this.game.resize();
    }
  }

  update() {
    if (this.game) {
      this.game.update();
    }
  }

  render() {
    if (this.game) {
      this.game.render();
    }
  }
}
