 var player;
 var p_flicker = false;
 var flickerCount = 0;

function setup() {
  createCanvas(400,400);
  
  player = createSprite(200, 200, 50, 50);
}

function draw() {
  background("black");
  
  if(keyDown("6")) {
    p_flicker = true;
  }
  
  playerMovement();
  playerFlicker();
  
  drawSprites();
}

function playerMovement() {
  if(keyDown("w")){
    player.y -= 5;
  }
  
  if(keyDown("a")){
    player.x -= 5;
  }
  
  if(keyDown("s")){
    player.y += 5;
  }
  
  if(keyDown("d")){
    player.x += 5;
  }
}

function playerFlicker(){
  if(p_flicker === true) {
    if(flickerCount < 5) {
      if(frameCount % 4 === 0) {
        player.visible = false;
        flickerCount += 0.5;
      }else {
        player.visible = true;
      }
    }else {
      p_flicker = false;
    }
  }else {
    flickerCount = 0;
    player.visible = true;
  }
}
