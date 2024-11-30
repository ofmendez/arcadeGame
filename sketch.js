/* eslint-disable no-undef */

let cols, rows, vh, vw;
const scl = 20;
const hscl = scl / 2;

function getGridArrayBit (array, row, col) {
	return (array[row] >> col) & 1;
}

function setup () {
	vh = 540;
	vw = 7 / 9 * vh;
	createCanvas(vw, vh);
	background('#2f2fcf');
	// frameRate(24);
	fill(0);

	cols = floor(width / scl);
	rows = floor(height / scl);

	initSwipe();
	drawLevel();
	player = new Player(scl);
	fill(255);
	text(`vw: ${vw}`, 100, 100);
}

function draw () {
	player.draw();
	drawPellets();
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
