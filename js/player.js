/* eslint-disable no-undef */

class Player {
	constructor (s) {
		this.pos = createVector(10 * s + (s / 2), 20 * s + (s / 2));
		this.biteSize = PI / 8;
	}

	update () {
		this.pos.y += 1;
		const yy = (this.pos.y + 10) / 20;
		console.log((yy));
	}

	draw () {
		push();
		fill(0);
		rect(this.pos.x - 15, this.pos.y - 15, 30, 30);
		fill('#FF0');
		const dir = 0; // RIGHT
		// const dir = PI // LEFT
		// const dir = HALF_PI // DOWN
		// const dir = -HALF_PI // UP

		const ini = dir + this.biteSize * sin(frameCount * 0.4) + this.biteSize;
		const end = -ini + 2 * dir;
		arc(this.pos.x, this.pos.y, 30, 30, ini, end, PIE);
		pop();
	}
}
