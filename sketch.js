var player;
var playerX, playerY;
var pX, pY;

var bg;

var screen_1 = function(sketch) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(400, 400);
    canvas1.position(0,0);
    
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

var screen_2 = function(sketch) {
  sketch.preload = function() {
    bg = sketch.loadImage("outline_background.png");
  }
  
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(400, 400);
    canvas1.position(0,0);
  }
  
  sketch.draw = function() {
    sketch.background(bg);
    
    if(sketch.frameCount % 1 === 0) {
      sketch.clear();
    }
    
    pX = playerX;
    pY = playerY;
    
    sketch.text(pX, 50, 50);
    sketch.text(pY, 75, 50);
    
    
    sketch.drawSprites();
  }
}

new p5(screen_2);