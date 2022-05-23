import Phaser from "phaser";

export default class Login extends Phaser.Scene {
  constructor() {
    super("Login");
  }

  preload() {
    const path="assets/images/"
    this.load.image(
      "logo",
      `${path}logo.png`
    );
    const images = ['tile-left', 'tile-middle', 'tile-right', 'tile-single', 'background', 'goal']
    images.forEach(img => {
      this.load.image(img, `${path}${img}.png`)
    })
    this.load.spritesheet('player',  `${path}player.png`, { frameHeight: 165, frameWidth: 120 })
    this.load.spritesheet('coin',  `${path}coin.png`, { frameHeight: 42, frameWidth: 42 })

    // this.load.tilemapTiledJSON()
  }

  create() {
    this.add.image(400, 150, 'logo');
    const text = this.add
      .text(400, 350, "Start Game", { fontSize: 32 })
      .setOrigin(0.5);
    text.setInteractive({ useHandCursor: true });
    text.on("pointerdown", () => this.clickButton());

    this.input.keyboard.on("keydown-ENTER", () => {
      this.scene.switch("Game");
    });
  }

  clickButton() {
    this.scene.switch("Game");
  }
}