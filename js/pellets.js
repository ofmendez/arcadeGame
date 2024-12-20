class Pellets {
	constructor () {
		const pellets = [
			0x000000,
			0x0FFBFE,
			0x088A22,
			0x088A22,
			0x088A22,
			0x0FFFFE,
			0x08A0A2,
			0x08A0A2,
			0x0FBBBE,
			0x008020,
			0x008020,
			0x008020,
			0x008020,
			0x008020,
			0x008020,
			0x008020,
			0x008020,
			0x008020,
			0x0FFBFE,
			0x088A22,
			0x0EFBEE,
			0x02A0A8,
			0x02A0A8,
			0x0FBBBE,
			0x080A02,
			0x0FFFFE,
			0x000000
		];
		this.pellets = pellets;	
	}
	
	drawPellets (levelLength) {
		push();
		for (let i = 0; i < levelLength; i++)
			for (let j = 0; j < 21; j++)
				if (getGridArrayBit(this.pellets, i, j)) {
					stroke('#FF0');
					strokeWeight(hscl / 2);
					point(j * scl + hscl, i * scl + hscl);
				}
		pop();
	}
}


