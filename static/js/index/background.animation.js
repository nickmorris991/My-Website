const canvas = document.getElementById("anim-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// size of each node on a tree
const nodeSize = 13;

// each binary tree representation in this array.
let binaryTreeArray; 


// 'size' is the number of nodes on the tree, not a node's size.
function Tree(x, y, xDirection, yDirection, size, color) {
    this.x = x;
    this.y = y;
    this.xDirection = xDirection;
    this.yDirection = yDirection;
    this.size = size;
    this.color = color;
}


Tree.prototype.draw = function() {
    // TODO: loop for this.size (number of nodes in the tree) creating the appropriate coordinates
    var coords = [ [this.x,this.y], [this.x + 100,this.y + 100]];
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    for (var i=0; i < coords.length; i++) {
        // draw a node of the tree and line to the next node (if there is one)
        ctx.beginPath();
        ctx.arc(coords[i][0], coords[i][1], nodeSize, 0, Math.PI * 2, false);
        if(i+1 < coords.length) {
            ctx.moveTo(coords[i][0], coords[i][1]);
            ctx.lineTo(coords[i+1][0], coords[i+1][1]);
            ctx.stroke();
        }
        ctx.fill();
    }
}


Tree.prototype.update = function() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.xDirection = -this.xDirection;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.yDirection = -this.yDirection;
    }

    // this.x += this.xDirection;
    // this.y += this.yDirection;

    this.draw();
}


function createTrees() {
    binaryTreeArray = [];
    for (let i=0; i < 5; i++) {
        let color = 'white';
        let size = Math.random() * 10;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let xDirection = (Math.random() * .4) - .2;
        let yDirection = (Math.random() * .4) - .2;
        binaryTreeArray.push(new Tree(x, y, xDirection, yDirection, size, color));
    }

}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0, innerWidth, innerHeight); 

    for (let i=0; i < binaryTreeArray.length; i++) {
        binaryTreeArray[i].update();
    }
}


window.addEventListener('resize',
    function() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        createTrees();
    }
)


createTrees();
animate();


