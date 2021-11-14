let start, prev;
function explode(timestamp) {
	const context = document.getElementById('canvas').getContext('2d');
	if (start === undefined) {
		start = timestamp;
		context.beginPath();
		context.fillRect(100, 100, 200, 200);
	}
	const elapsed = timestamp - start;
	if (prev !== timestamp) {
		for (i = 0; i < 10; i++) {
			context.save();
			context.globalCompositeOperation = 'lighter';
			context.fillStyle =
				'rgba(' +
				200 +
				',' +
				Math.random() * 128 +
				',' +
				Math.random() * 64 +
				',' +
				Math.random() * 256 +
				')';
			context.beginPath();
			const x = (Math.random() * 2 - 1) * 200 + 200;
			const y = (Math.random() * 2 - 1) * 200 + 200;
			context.translate(x, y);
			context.arc(0, 0, Math.random() * 40, 0, Math.PI * 2, false);
			context.fill();
			context.restore();
		}
	}
	if (elapsed < 750) {
		prev = timestamp;
		window.requestAnimationFrame(explode);
	} else {
		start = undefined;
		prev = undefined;
		context.clearRect(0, 0, 400, 400);
	}
}
