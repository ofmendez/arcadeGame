/* eslint-disable no-undef */

class Player {
	constructor (s) {
		this.pos = createVector(10 * s + (s / 2), 20 * s + (s / 2));
		this.apertures = [0, 10, 20, 30, 40, 50];
		this.currentAperture = 0;
	}

	draw () {
		// stroke('#FF0');
		// strokeWeight(28);
		// point(this.pos.x, this.pos.y);
		// noStroke();
		// const ap = this.getAperture();
		// triangle(
		// 	this.pos.x, this.pos.y,
		// 	this.pos.x - 14, this.pos.y + ap,
		// 	this.pos.x - 14, this.pos.y - ap
		// );
		fill(255, 255, 0);

		// Update start and stop angles.
		const biteSize = PI / 16;
		const startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
		const endAngle = TWO_PI - startAngle;

		// Draw the arc.
		arc(50, 50, 80, 80, startAngle, endAngle, PIE);
	}

	getAperture () {
		this.currentAperture = (this.currentAperture + 1) % this.apertures.length;
		return this.apertures[this.currentAperture];
	}
}
