function draw_line() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')

	ctx.moveTo(0,400);
	ctx.lineTo(400,0);
	ctx.strokeStyle = "green"; 
	ctx.lineWidth = "5"; 
	ctx.stroke(); 
	ctx.moveTo(0,0);
	ctx.lineTo(400,400);
	ctx.stroke();    
}