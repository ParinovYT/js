function draw_line() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')

	ctx.moveTo(400,0);
	ctx.lineTo(0,400);
	ctx.strokeStyle = "green"; 
	ctx.lineWidth = "5"; 
	ctx.lineTo(888,0);
	ctx.stroke();  	
}