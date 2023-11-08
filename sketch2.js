var screen_2 = function(sketch) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(320, 240);
    canvas1.position(250,300);
  }
  
  sketch.draw = function() {
    sketch.background("black");
    
    sketch.text(playerX, 50, 50);
    sketch.text(playerY, 75, 50);
    
    sketch.drawSprites();
  }
}

new p5(screen_2);