function draw_fill() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')
	ctx.strokeStyle = "green"; //цвет обводки
	ctx.lineWidth = "10"; //толщина обводки
	ctx.rect(10, 10, 380, 380); //args: x,y,w,h
	ctx.stroke();
	ctx.fillStyle = "black"; //цвет заливки
	ctx.fill();  
}