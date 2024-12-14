/* eslint-disable no-undef */
class Level {
	updatePlayer(player) {
		console.log('Update player parent');
	}
}
class Level1 extends Level {

	constructor() {
		super();
		this.walls = [
			0x1FFFFF,
			0x100401,
			0x1775DD,
			0x155555,
			0x1775DD,
			0x100001,
			0x175F5D,
			0x175F5D,
			0x104441,
			0x1F75DF,
			0x014050,
			0x015B50,
			0x1F515F,
			0x001100,
			0x1F5F5F,
			0x014050,
			0x015F50,
			0x1F5F5F,
			0x100401,
			0x1775DD,
			0x110011,
			0x1D5F57,
			0x1D5F57,
			0x104441,
			0x17F5FD,
			0x100001,
			0x1FFFFF
		];
		this.drawLevel();

	}

	updatePlayer(player) {
		let newX = floor(player.pos.x + cos(player.targetDir) )
		let newY = floor(player.pos.y + sin(player.targetDir) ) 
		if (!getGridArrayBit(this.walls, newY, newX)){
			player.confirmDir();
			player.move();
			return;
		}
		newX = floor(player.pos.x + cos(player.dir) )
		newY = floor(player.pos.y + sin(player.dir) ) 
		if (!getGridArrayBit(this.walls, newY, newX)){
			player.move();
			return;
		}


		// const xx = Math.trunc((player.pos.x ) );
		// const yy = Math.trunc((player.pos.y ) );
		// if (yy < 15)
		// console.log('-> ', xx, ' - ', yy, ' : ', getGridArrayBit(this.walls, yy, xx) ? 0 : 1);
	}
	drawLevel() {
		push();
		rect(8.7 * scl, 6.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(8.7 * scl, 16.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(8.7 * scl, 21.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(0, 21.6 * scl, 2.4 * scl, 0.8 * scl);
		rect(18.7 * scl, 21.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(2.7 * scl, 6.6 * scl, 1.6 * scl, 0.8 * scl);
		rect(16.7 * scl, 6.6 * scl, 1.6 * scl, 0.8 * scl);
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

