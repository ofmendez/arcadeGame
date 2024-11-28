/* eslint-disable no-undef */
/* eslint-disable no-undef */

let cols, rows;
const scl = 20;
const hscl = scl / 2;

const level = [
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

pellets = [
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

function getGridArrayBit (array, row, col) {
	return (array[row] >> col) & 1;
}

function setup () {
	createCanvas(420, 540);
	frameRate(5);

	cols = floor(width / scl);
	rows = floor(height / scl);

	initSwipe();
}

function draw () {
	background(255);
	drawLevel();
}

function drawLevel () {
	for (let i = 0; i < level.length; i++)
		for (let j = 0; j < 21; j++)
			if (getGridArrayBit(level, i, j)) {
				stroke('#2f2fcf');
				fill('#2f2fcf');
				rect(j * scl, i * scl, scl, scl);
			}

	for (let i = 0; i < level.length; i++)
		for (let j = 0; j < 21; j++) {
			if (!getGridArrayBit(level, i, j)) {
				stroke('#000');
				strokeWeight(15);
				fill('#000');
				rect(j * scl, i * scl, scl, scl);
			}
			if (getGridArrayBit(pellets, i, j)) {
				fill('#FF0');
				noStroke();
				ellipse(j * scl + hscl, i * scl + hscl, hscl / 2);
			}
		}
}

function keyPressed () {
	if (keyCode === UP_ARROW)
		snake.setDir(0, -1);
	else if (keyCode === DOWN_ARROW)
		snake.setDir(0, 1);
	else if (keyCode === RIGHT_ARROW)
		snake.setDir(1, 0);
	else if (keyCode === LEFT_ARROW)
		snake.setDir(-1, 0);
	else if (key === 'r') {
		snake = new Snake();
		loop();
	}
}

function SwipeOf (e) {
	if (e === UP_ARROW)
		snake.setDir(0, -1);
	else if (e === DOWN_ARROW)
		snake.setDir(0, 1);
	else if (e === RIGHT_ARROW)
		snake.setDir(1, 0);
	else if (e === LEFT_ARROW)
		snake.setDir(-1, 0);
}
