var game = new Phaser.Game(600, 400, Phaser.AUTO)
game.state.add('state1', state1.demo)
game.state.start('state1')