class Gui {
  constructor(game) {
    this.canvas = null;
    this.ctx = null;
    this.assets = null;
    this.assetsToLoad = 0;
    this.gameloop = new GameLoop(game);
    this.begin = null;
    this.end = null;
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  prepareCanvas() {
    this.canvas = document.getElementById("game_canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    this.resize();
  }

  toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = toggle ? "block" : "none";
    element.style.display = display;
  }

  closeAllScreens() {
    let elements = document.querySelectorAll(".screen");
    [...elements].forEach((e) => {
      e.style.display = "none";
    });
  }

  showScreen(id) {
    this.closeAllScreens();
    this.toggleScreen(id, true);
  }

  launchIfReady() {
    this.assetsToLoad--;
    if (this.assetsToLoad == 0) {
      this.prepareCanvas();
      this.showScreen("start");
    }
  }

  beginLoadingImage(imgVar, fileName) {
    imgVar.onload = () => this.launchIfReady();
    imgVar.src = fileName;
  }

  beginLoadingAudio(audioVar, fileName) {
    audioVar.src = fileName;
    audioVar.addEventListener("canplay", () => this.launchIfReady());
  }

  load(assets) {
    if (!assets || assets.length == 0) {
      this.prepareCanvas();
      this.showScreen("start");
      return;
    }

    if (assets) {
      this.assets = assets;
      this.assetsToLoad = this.assets.length;

      for (let i = 0; i < this.assets.length; i++) {
        if (this.assets[i].var != undefined) {
          if (this.assets[i].var.nodeName == "IMG") {
            this.beginLoadingImage(this.assets[i].var, this.assets[i].file);
          }

          if (this.assets[i].var.nodeName == "AUDIO") {
            this.beginLoadingAudio(this.assets[i].var, this.assets[i].file);
          }
        }
      }
    }
  }

  getAsset(id) {
    return this.assets.filter((r) => r.id === id)[0].var;
  }

  getAssets() {
    return this.assets;
  }

  startGame(mode) {
    this.prepareCanvas();
    this.showScreen("game_canvas");
    this.gameloop.start(mode);
    this.begin = Date.now();
  }

  stopGame() {
    this.showScreen("end");
    this.gameloop.stop();
    this.end = Date.now();
    return (this.end - this.begin) / 1000;
  }
}
