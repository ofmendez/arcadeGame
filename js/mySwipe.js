/* eslint-disable no-undef */

function initSwipe () {
	console.log('ho');
	let touchstartX = 0;
	let touchstartY = 0;
	let touchendX = 0;
	let touchendY = 0;

	function handleGesture (touchstartX, touchstartY, touchendX, touchendY, callb) {
		const delx = touchendX - touchstartX;
		const dely = touchendY - touchstartY;
		if (Math.abs(delx) > Math.abs(dely))
			if (delx > 0) return callb(RIGHT_ARROW);
			else return callb(LEFT_ARROW);
		else if (Math.abs(delx) < Math.abs(dely))
			if (dely > 0) return callb(DOWN_ARROW);
			else return callb(UP_ARROW);
		else return null;
	}

	const gestureZone = window.main;

	gestureZone.addEventListener('touchstart', function (event) {
		touchstartX = event.changedTouches[0].screenX;
		touchstartY = event.changedTouches[0].screenY;
	}, false);

	gestureZone.addEventListener('touchend', function (event) {
		touchendX = event.changedTouches[0].screenX;
		touchendY = event.changedTouches[0].screenY;
		if (typeof SwipeOf === 'function')
			handleGesture(touchstartX, touchstartY, touchendX, touchendY, SwipeOf);
	}, false);
}
