/* eslint-disable no-undef */
/* eslint-disable no-undef */

let cols; let rows; const scl = 32; let snake; let food;

const level =
[
	0xFFFFFFFF,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80FFFF01,
	0x80800101,
	0x80800101,
	0x80FFFF01,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0x80000001,
	0xFFFFFFFF
];
function getGridArrayBit (array, row, col) {
	return (array[row] >> col) & 1;
}

function setup () {
	createCanvas(400, 400);
	frameRate(5);

	cols = floor(width / scl);
	rows = floor(height / scl);

	initSwipe();
}

function draw () {
	background('#FF0');
	fill(255);
	strokeWeight(4);
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
