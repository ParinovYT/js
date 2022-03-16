function draw_line() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')

	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineCap = "round";
	ctx.lineWidth = "50";
	ctx.moveTo(350,50);
	ctx.lineTo(50,350);
	ctx.stroke();   
}