const canvas = document.getElementById("anim-canvas");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let animArray;


function Particle(x, y, xDirection, yDirection, size, color) {
    this.x = x;
    this.y = y;
    this.xDirection = xDirection;
    this.yDirection = yDirection;
    this.size = size;
    this.color = color;
}


Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}


Particle.prototype.update = function() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.xDirection = -this.xDirection;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.yDirection = -this.yDirection;
    }

    this.x += this.xDirection;
    this.y += this.yDirection;

    this.draw();
}


function init() {
    animArray = [];
    for (let i=0; i < 100; i++) {
        let color = 'white';
        let size = Math.random() * 20;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let xDirection = (Math.random() * .4) - .2;
        let yDirection = (Math.random() * .4) - .2;
        animArray.push(new Particle(x, y, xDirection, yDirection, size, color));
    }

}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth, innerHeight); 

    for (let i=0; i < animArray.length; i++) {
        animArray[i].update();
    }
}


window.addEventListener('resize',
    function() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
)


init();
animate();


