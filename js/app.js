
// Enemies our player must avoid
let Enemy = function(y,x) {
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.randomSpeed = function(dt){
    let randomNum = Math.floor(Math.random() * (80 - 30 + 1)) + 30;
    this.speed = randomNum;
}

Enemy.prototype.update = function(dt) {
   if(this.x > 550){
        this.randomSpeed();
        this.x = -50;
   }
    this.x += dt * this.speed; 
    this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let Player = function(){
    this.sprite = 'images/girl.png';
    this.x = 200;
    this.y = 425;
}

Player.prototype.update = function(x, y){
    this.render(this.x, this.y)
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function () {
   
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player  = new Player();
let enemy = new Enemy(65, -50);
let enemy2 = new Enemy(140, -80);
let enemy3 = new Enemy(225, -60);
let allEnemies = [enemy, enemy2, enemy3];


allEnemies.forEach(function(enemy){
    enemy.randomSpeed();
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});





