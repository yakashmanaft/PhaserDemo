class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame')
    }

    create() {
        this.add.text(20, 20, 'Playng Game', { font: '25px Arial', fill: 'yellow' });
    }
}