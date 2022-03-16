function start_anim()
{
var canvas=document.getElementById('g_render');
var ctx = canvas.getContext('2d');

let size = 75; 
setInterval(function() {
    ctx.beginPath();
    ctx.clearRect(0,0,400,400); 
    ctx.fillStyle = "green"; 
    ctx.rect(75, 50, size, size);
    ctx.fill();
    size++;
    if(size > 350) {
        size = 50;
    }
},1); 
}