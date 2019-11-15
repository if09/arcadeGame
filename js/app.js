// ENEMY CLASS WITH ATTRIBUTE AND METHODS

class Enemy {
    constructor(y, x) {
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.sprite = 'images/enemy-bug.png';
    }
    randomSpeed() {
        let randomNum = Math.floor(Math.random() * (80 - 30 + 1)) + 30;
        this.speed = randomNum;
    }
    update(dt) {
        if (this.x > 550) {
            this.randomSpeed();
            this.x = -50;
        }
        this.x += dt * this.speed;
        this.render();
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// PLAYER CLASS WITH ATTRIBUTES AND METHODS
class Player {
    constructor() {
        this.x = 200;
        this.y = 425;
        this.sprite = 'images/char-horn-girl.png';
    }
    update() {
        this.render(this.x, this.y)
        for (let enemy of allEnemies) {
            if (this.y == enemy.y && enemy.x + 50 >= this.x && enemy.x - 50 <= this.x) {
                alert("Try again");
                this.x = 200;
                this.y = 425;
            }

        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(allowedKeys) {
        if (allowedKeys == "left" && this.x > 0) {
            this.x -= 50;
        }
        if (allowedKeys == "right" && this.x < 400) {
            this.x += 50;
        }
        if (allowedKeys == "down" && this.y < 425) {
            this.y += 50;
        }
        if (allowedKeys == "up" && this.y > -25) {
            this.y -= 50;
            console.log(this.y)
        }
        if (this.y < -24)
            setTimeout(function () { alert("Congrats you have WON"); }, 100);
    }

}



/// INIT CLASSES TO MAKE PLAYERS AND ENEMIES

let player = new Player();
let enemy = new Enemy(65, -50);
let enemy2 = new Enemy(140, -80);
let enemy3 = new Enemy(225, -60);
let allEnemies = [enemy, enemy2, enemy3];


allEnemies.forEach(function (enemy) {
    enemy.randomSpeed();
});

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



