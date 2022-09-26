var canv = document.getElementById("myCanvas");
var ctx = canv.getContext("2d");
		
        var canvPos = getPos(canv);
        var mouseX = 0;
        var mouseY = 0;
		
		var clik = document.getElementById("start");
var aster = new Image();
		var player = new Image();
		var bg = new Image();
		var meteor = new Image();
		meteor.src = "img/meteor.png"
		bg.src = "img/stars.jpg"
aster.src = "img/asteroid.png";
player.src = "img/ply.png";
		
		var massbg = [];
		massbg[0]= {
			x: 0,
			y:-45
		}
		var meteo = [];
		meteo[0] = {
			x: Math.random()*canv.width,
			y: -55
		}
		
var block = [];
block[0] ={
	x: Math.random()*canv.width,
	y: -55

}
		 canv.addEventListener("mousemove", setMousePosition, false);
    function setMousePosition(e){
        mouseX = e.clientX - canvPos.x;
        mouseY = e.clientY - canvPos.y;
    }
        function getPos(e1){
        var xPosition = 0;
        var yPosition = 0;
    
        while (e1) {
            xPosition+= (e1.offsetLeft - e1.scrollLeft + e1.clientLeft);
            yPosition += (e1.offsetTop - e1.scrollTop + e1.clientTop);
            e1 = e1.offsetParent;}
        return {
            x: xPosition,
            y: yPosition
        };
    }
       
		
function draw(){
	   ctx.clearRect(0,0,canv.width,canv.height);
	ctx.drawImage(player, mouseX,mouseY);
	for(var j = 0; j < massbg.length; j++){
		ctx.drawImage(bg,massbg[j].x,massbg[j].y);
		
        
		massbg[j].y ++;
		if (massbg[j].y == 0)
            {
                massbg.push({
                    x: 0,
                    y: -bg.height
				
                })
			}
	}
	
	
	for (var m = 0; m < meteo.length; m++){
				ctx.drawImage(meteor, meteo[m].x, meteo[m].y);
				meteo[m].y = meteo[m].y +2;
				if (meteo[m].y == 35){
					meteo.push({
						x: Math.floor(Math.random()*canv.width),
                        y: -55
					})
				}
		if(mouseX + player.width >= meteo[m].x && mouseX <= meteo[m].x + meteor.width && mouseY + player.height >= meteo[m].y && mouseY <= meteo[m].y + meteor.height){
			gameover();
		}
						
		}
	
	
	for(var i = 0; i < block.length; i++){
		ctx.drawImage(aster, block[i].x, block[i].y);
		
        
		block[i].y ++;
		if (block[i].y == -25)
            {
                block.push({
                    x: Math.floor(Math.random()*canv.width),
                    y: -55				
                })
            
		}
		if(mouseX + player.width >= block[i].x && mouseX <= block[i].x + aster.width && mouseY + player.height >= block[i].y && mouseY <= block[i].y + aster.height){
		gameover();
	}
		}
	
	requestAnimationFrame(draw);
    
}

		function gameover(){
			ctx.clearRect(0,0,canv.width,canv.height);
		}
    
    function start(){		
requestAnimationFrame(draw);

	}
		 clik.onclick = start;