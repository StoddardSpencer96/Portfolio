class Explosion extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "explosion"); //call the super class
        scene.add.existing(this);
        this.play("explode");
    }
}