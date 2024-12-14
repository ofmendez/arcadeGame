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
	frameRate(2);
	
	createCanvas(vw, vh);
	background('#2f2fcf');
	fill(0);
	
	cols = floor(width / scl);
	rows = floor(height / scl);
	
	initSwipe();
	level1 = new Level1();
	player = new Player(scl,level1);
	// drawLevel();
	// drawPellets();
	llog();
}

function draw () {
	player.update();
	player.draw();
}

function keyPressed () {
	if (keyCode === UP_ARROW)
		player.setDir(-HALF_PI);
	else if (keyCode === DOWN_ARROW)
		player.setDir(HALF_PI);
	else if (keyCode === RIGHT_ARROW)
		player.setDir(0);
	else if (keyCode === LEFT_ARROW)
		player.setDir(PI);
}

function SwipeOf (e) {
	if (e === UP_ARROW)
		player.setDir(-HALF_PI);
	else if (e === DOWN_ARROW)
		player.setDir(HALF_PI);
	else if (e === RIGHT_ARROW)
		player.setDir(0);
	else if (e === LEFT_ARROW)
		player.setDir(PI);
}
function llog() {
	push();
	fill(255);
	text(`vw: ${vw}`, 100, 100);
	pop();
}
