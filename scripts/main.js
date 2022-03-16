function draw_filled_circle() 
{
	var canvas=document.getElementById('g_render');
	var ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.bezierCurveTo(30, 147, 108, 145, 130, 48);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = 5; 
	ctx.strokeStyle="green";
	ctx.moveTo(100, 150); 
	ctx.bezierCurveTo(150, 50, 340, 10, 400, 200);
	ctx.stroke(); 
	
	
}