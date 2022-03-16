function draw_circle() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')
	ctx.lineWidth = 5; 
	ctx.strokeStyle = "red";
	ctx.arc(400/2,400/2,190,0, 2*Math.PI,true);
	ctx.stroke();
}