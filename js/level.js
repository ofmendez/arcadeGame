class Level {

	constructor(walls, pellets) {
		this.walls = walls;
		this.pellets = pellets;
		this.drawLevel();
	}
	
	updatePlayer(player) {
		const posX = player.getPos().x;
		const posY = player.getPos().y;
		let newX = floor(posX +cos(player.targetDir) );
		let newY = floor(posY +sin(player.targetDir) ); 
		if (!getGridArrayBit(this.walls, newY, newX)){
			player.confirmDir();
			player.move();
			return;
		}
		newX = floor( posX +cos(player.dir) );
		newY = floor( posY +sin(player.dir) ); 
		if (!getGridArrayBit(this.walls, newY, newX)){
			player.move();
			return;
		}
	}

	drawLevel() {
		push();
		for (let i = 0; i < this.walls.length; i++)
			for (let j = 0; j < 21; j++)
				if (!getGridArrayBit(this.walls, i, j)) {
					stroke(0);
					strokeWeight(15);
					rect(j * scl, i * scl, scl, scl);
				}
		pop();
	}
}
