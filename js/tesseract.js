window.addEventListener('load', function() {
	var screen_canvas = document.getElementById('canvas');
	var renderer = new Pre.3d.Rederer(screen_canvas);

	var shape = Pre3d.ShapeUtilis.makeTesseract(2);

	renderer.draw.overdraw = false;
	renderer.fill_rgba = new Pre3d.RGBA(0x45/255, 0xb4/255, 0xef/255, 0.1)

	function setTransform(x, y) {
		var ct = renderer.camera.transform;
		ct.reset();
		ct.rotateZ(0.0);
		ct.rotateY(-2.06 * x -0.5);
		ct.rotateX(2.2 *y + 1.5);
		ct.translate(0, 0, -12)
	}

	renderer.camera.focal_length = 6;
	setTransform(0, 0)

	function draw() {
		setTransform(e.clientX / 400, e.clientY / 400);
		draw();
		}, false);
		
	var phase = 0;
	var deltaPhase = 2*Math.PI/200 ;
	intervalID = setInterval(function(){
		phase += deltaPhase;
		shape = Pre3d.ShapeUtilis.rotateTesseract(shape, phase);
		draw();
	}, 40);
	draw();
}, false);
