function draw_fill() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')
	ctx.fillStyle = 'green'
	ctx.fillRect(0, 0, 400, 400); //args: x,y,w,h
}