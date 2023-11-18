var player;

var playerPosition = 1;
var playerYD = 1;
var playerXL = 2;
var playerYU = 3;
var playerXR = 4;

var enemy = [];
var enemyCount = 0;
var enemyMax = 100;
var enemyFriction = 1;
var enemyGroup;

var beginChallenge = false;

var swing;
var swingGroup;

function setup() {
    createCanvas(400,400);

    player = new Sprite(200,200,50);

    enemyGroup = new Group();
    swingGroup = new Group();
}

function draw() {
    background("purple");

    if(kb.presses('o')) {
        beginChallenge = true;
    }

    if(!(player.colliding(enemyGroup))) {
        player.vel.x = 0;
        player.vel.y = 0;
    }

    playerMovement();
    playerCombat();
    enemyChallenge();
    combatSystem();
}

function playerMovement() {
    if(kb.pressing('w')) {
        player.y -= 5;
        playerPosition = playerYU;
    }

    if(kb.pressing('a')) {
        player.x -= 5;
        playerPosition = playerXL;
    }

    if(kb.pressing('s')) {
        player.y += 5;
        playerPosition = playerYD;
    }

    if(kb.pressing('d')) {
        player.x += 5;
        playerPosition = playerXR;
    }
}

function enemyChallenge() {
    if(beginChallenge === true) {
        if(enemyCount < enemyMax) {
            if(frameCount % 50 === 0) {
                let moveX = Math.round(random(0, 400));
                let moveY = Math.round(random(0, 400));
                enemy[enemyCount] = new Sprite(moveX, moveY, 25);
                enemy[enemyCount].friction = enemyFriction;
                enemyGroup.add(enemy[enemyCount]);
                enemy[enemyCount].overlaps(swingGroup);
                enemyCount++;
            }
        }
    
        for(let i = 0; i<enemyCount; i++){
            enemy[i].moveTowards(player, 0.004);
        }
    }
}

function playerCombat() {
    if(kb.presses('enter')) {
        if(playerPosition === playerYD) {
            swing = new Sprite(player.x, player.y+50, 150);
        }else if(playerPosition === playerXL) {
            swing = new Sprite(player.x-50, player.y, 150);
        }else if(playerPosition === playerYU) {
            swing = new Sprite(player.x, player.y-50, 150);
        }else if(playerPosition === playerXR) {
            swing = new Sprite(player.x+50, player.y, 150);
        }

        swing.visible = false;

        player.overlaps(swingGroup);

        swingGroup.add(swing);
    }else {
        if(frameCount % 25 === 0) {
            swingGroup.removeAll();
        }
    }
}

function combatSystem() {
    for(let i = 0; i<enemyCount; i++) {
        if(enemy[i].overlaps(swingGroup)) {
            enemy[i].remove();
            enemyMax++;
        }
    }
}