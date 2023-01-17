let game = new Game();
window.gui = new Gui(game);

window.onload = function () {
  console.log("loading...");

  window.gui.load([
    {
      id: "player-img",
      var: (playerImg = document.createElement("img")),
      file: "assets/images/player.png",
    },
    {
      id: "enemy1-img",
      var: (enemy1Img = document.createElement("img")),
      file: "assets/images/enemy1.png",
    },
    {
      id: "enemy2-img",
      var: (enemy2Img = document.createElement("img")),
      file: "assets/images//enemy2.png",
    },
    {
      id: "enemy3-img",
      var: (enemy3Img = document.createElement("img")),
      file: "assets/images//enemy3.png",
    },
    {
      id: "enemy-boss-img",
      var: (enemyBossImg = document.createElement("img")),
      file: "assets/images//enemy_boss.png",
    },
    {
      id: "shoot-audio",
      var: (shootAudio = document.createElement("audio")),
      file: "assets/sounds/shoot.mp3",
    },
    {
      id: "enemy-death-audio",
      var: (enemyDeathAudio = document.createElement("audio")),
      file: "assets/sounds/enemy_death.mp3",
    },
    {
      id: "explosion-player-audio",
      var: (explosionPlayerAudio = document.createElement("audio")),
      file: "assets/sounds/explosion_player.mp3",
    },
    {
      id: "enemy-boss-death-audio",
      var: (explosionPlayerAudio = document.createElement("audio")),
      file: "assets/sounds/enemy_boss_death.mp3",
    },
  ]);
};

window.onresize = function () {
  console.log("resizing...");
  window.gui.resize();
};
