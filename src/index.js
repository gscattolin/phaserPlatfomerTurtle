import Phaser from 'phaser';
import Login from './scenes/Login'

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
        },
      },   
    scene: [Login]
};

const game = new Phaser.Game(config);
