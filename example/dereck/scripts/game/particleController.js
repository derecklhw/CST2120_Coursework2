class ParticleController {
  constructor() {
    this.collection = [];
  }

  init() {}

  update() {
    this.collection.forEach((particle, particleIndex) => {
      if (particle.opacity <= 0) {
        this.collection.splice(particleIndex, 1);
      } else {
        particle.update();
      }
    });
  }

  render() {
    this.collection.forEach((particle) => particle.render());
  }
}
