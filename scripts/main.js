function draw_arc() 
{
	var canvas=document.getElementById('g_render');
	var ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.lineWidth = 5; 
	ctx.arc(200,200,100,0, Math.PI,true);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.lineWidth = 5; 
	ctx.arc(200,200 + 10,100,0, Math.PI,false);
	ctx.stroke();
	
}