function draw_line() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')

	let x = 300
	let y = 80
	let z = 70

	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = "10";
	ctx.moveTo(z,x);
	ctx.lineTo(x,50);
	ctx.lineCap = "round";
	ctx.lineTo(400,x);
	ctx.lineTo(y,x);
	ctx.stroke(); 
}