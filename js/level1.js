class Level1 extends Level {
	constructor(pellets) {
		const walls = [
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
		super(walls, pellets);
	}

	drawLevel() {
		super.drawLevel();
		push();
		rect(8.7 * scl, 6.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(8.7 * scl, 16.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(8.7 * scl, 21.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(0, 21.6 * scl, 2.4 * scl, 0.8 * scl);
		rect(18.7 * scl, 21.6 * scl, 3.6 * scl, 0.8 * scl);
		rect(2.7 * scl, 6.6 * scl, 1.6 * scl, 0.8 * scl);
		rect(16.7 * scl, 6.6 * scl, 1.6 * scl, 0.8 * scl);
		pop();
		this.pellets.drawPellets(this.walls.length);
	}
}

