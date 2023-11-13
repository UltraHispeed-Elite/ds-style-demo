var player;
var playerX, playerY;

var screen_1 = function(sketch) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(400, 240);
    canvas1.position(210,0);
    
    player = sketch.createSprite(200,110, 50, 50);
  }
  
  sketch.draw = function() {
    sketch.background("black");
    
    sketch.camera.x = player.x;
    sketch.camera.y = player.y;
    
    sketch.playerMovement();
    
    sketch.drawSprites();
  }
  
  sketch.playerMovement = function(){
    if(sketch.keyDown("w")) {
      player.y -= 5;
    }
  
    if(sketch.keyDown("a")) {
      player.x -= 5;
    }
  
    if(sketch.keyDown("s")) {
      player.y += 5;
    }
  
    if(sketch.keyDown("d")) {
      player.x += 5;
    }
    
    playerX = player.x;
    playerY = player.y;
    
    console.log(playerX, playerY);
  }
}

new p5(screen_1);