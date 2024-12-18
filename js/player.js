
class Player {
	constructor(scl, level) {
		this.level = level;
		this.biteSize = PI / 8;
		this.scl = parseInt(scl);
		this.pos = createVector(9.5*scl, 2.5*scl);
		this.dir = HALF_PI;
		this.targetDir = this.dir;
		this.accX = 0;
		this.accY = 0;
	}

	move() {
		let accX = floor(cos(this.dir));
		let accY = floor(sin(this.dir));
		this.pos.x += accX;
		this.pos.y += accY;
		this.accX += accX; 
		this.accY += accY;
		this.accX = this.accX % this.scl === 0 ? 0 : this.accX;
		this.accY = this.accY % this.scl === 0 ? 0 : this.accY;
	}

	setDir(dir) {	
		this.targetDir = dir;
	}

	confirmDir() {
		this.dir = this.targetDir;
	}

	getPos() {	
		return {
			x: (this.pos.x/this.scl)-0.5, 
			y: (this.pos.y/this.scl)-0.5
		};
	}

	update() {
		if (this.accX === 0 && this.accY === 0 )
			this.level.updatePlayer(this);
		else
			this.move();
	}

	draw() {
		push();
		const drwY =  (this.pos.y );
		const drwX =  (this.pos.x );
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
