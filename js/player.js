/* eslint-disable no-undefabout:blank */

class Player {
	constructor(scl, level) {
		this.level = level;
		this.pos = createVector(1, 1);
		this.biteSize = PI / 8;
		this.scl = scl;
		this.dir = HALF_PI;
		this.targetDir = this.dir;
		this.accX = 0;
		this.accY = 0;
	}

	move() {
		let accX = cos(this.targetDir);
		let accY = sin(this.targetDir);
		this.accX += accX;
		this.accY += accY; 
		if (this.accX % this.scl === 0 && accY !== 0){
			this.accX = 0;
			this.dir = this.targetDir;
		}
		if (this.accY % this.scl === 0 && accX !== 0){
			this.accY = 0;
			this.dir = this.targetDir;
		}
		this.pos.x += accX/this.scl;
		this.pos.y += accY/this.scl;
	}

	setDir(dir) {	
		this.targetDir = dir;
	}

	update() {
		this.level.updatePlayer(this);
	}

	draw() {
		push();
		const drwY = this.scl * (this.pos.y + 0.5);
		const drwX = this.scl * (this.pos.x + 0.5);
		fill(0);
		rect(drwX - 15, drwY - 15, 30, 30);
		fill('#FF0');
		stroke(0);
		strokeWeight(2);
		const ini = this.dir + this.biteSize * sin(frameCount * 0.4) + this.biteSize;
		const end = -ini + 2 * this.dir;
		arc(drwX, drwY, 30, 30, ini, end, PIE);
		pop();
	}
}
