function draw_filled_circle() 
{
	var canvas=document.getElementById('g_render');
	var ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.lineWidth = 15;
	ctx.strokeStyle = "orange";
	ctx.fillStyle="blue";
	ctx.arc(200, 200, 90, 0, 2*Math.PI, false);
	ctx.stroke();
	ctx.fill(); 
	
}