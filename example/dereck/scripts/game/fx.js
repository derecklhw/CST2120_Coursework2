class Fx {
  constructor() {
    this.canvas = null;
    this.ctx = null;
  }

  init() {
    this.canvas = document.getElementById("game_canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  fillCanvas(color) {
    this.drawRect(0, 0, this.canvas.width, this.canvas.height, color);
  }

  drawRect(x, y, width, height, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.fill();
  }

  drawCircle(x, y, size, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPlayer(image, x, y, width, height, rotation) {
    this.ctx.save();
    this.ctx.translate(x + width / 2, y + height / 2);
    this.ctx.rotate(rotation);
    this.ctx.translate(-x - width / 2, -y - height / 2);

    this.ctx.drawImage(image, x, y, width, height);
    this.ctx.restore();
  }

  drawEnemy(image, x, y, width, height) {
    this.ctx.drawImage(image, x, y, width, height);
  }
}
