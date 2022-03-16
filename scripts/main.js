function draw_filled_circle() 
{
	var canvas=document.getElementById('g_render');
	var ctx = canvas.getContext('2d');
	
	ctx.beginPath();
	ctx.lineWidth = 5; 
	ctx.strokeStyle="green"; 
	ctx.moveTo(75, 150); 
	ctx.quadraticCurveTo(150, 0, 300, 150); 
	ctx.stroke(); 
	
	ctx.beginPath(); 
	ctx.lineWidth = 7; 
	ctx.strokeStyle="red"; 
	ctx.moveTo(75, 75); 
	ctx.quadraticCurveTo(100, 150, 300, 50); 
	ctx.stroke(); 
	
}