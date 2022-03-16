function start_anim()
{
var canvas=document.getElementById('g_render');
var ctx = canvas.getContext('2d');

let pox_X = 75; 
setInterval(function() {
    ctx.beginPath();
    ctx.clearRect(0,0,400,400); 
    ctx.fillStyle = "green"; 
    ctx.rect(pox_X, 50, 50, 50);
    ctx.fill();
    pox_X++;
    if(pox_X > 600) {
        pox_X = 50;
    }
},1); 
}