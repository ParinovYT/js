function draw_line() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')

	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = "5";
	ctx.moveTo(100,150);
	ctx.lineTo(200,200);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "green";
	ctx.lineWidth = "5";
	ctx.moveTo(200,50);
	ctx.lineTo(150,150);
	ctx.stroke(); 
}