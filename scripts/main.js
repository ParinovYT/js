function draw_line() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')

	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = "5";
	ctx.moveTo(10,10);
	ctx.lineTo(380,10);
	ctx.lineTo(380,380);
	ctx.stroke();

}