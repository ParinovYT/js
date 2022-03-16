function draw_fill() {
	let _canvas = document.getElementById('g_render')
	let ctx = _canvas.getContext('2d')
	
	let i = 5
	let y = (105*3)+80
	
	ctx.beginPath();
	ctx.fillStyle = "red";
    ctx.moveTo(i,i);
    ctx.lineTo(y,i);
    ctx.lineTo(i,y);
    ctx.fill(); 
	
	
	ctx.beginPath();
	ctx.fillStyle = "green";
    ctx.moveTo(y,y);
    ctx.lineTo(i,y);
    ctx.lineTo(y,i);
    ctx.fill(); 
	
	
//380, 380
}