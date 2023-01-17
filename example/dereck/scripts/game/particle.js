class Particle {
  constructor(position, velocity, radius, color) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
    this.opacity = 1
    this.fx = new Fx();
  }

  init() {
    this.fx.init();
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.opacity -= 0.01;

  }

  render() {
    this.fx.ctx.save();
    this.fx.ctx.globalAlpha = this.opacity
    this.fx.drawCircle(
      this.position.x,
      this.position.y,
      this.radius,
      this.color
    );
    this.fx.ctx.restore();
  }
}
