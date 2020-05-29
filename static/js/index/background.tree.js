// *** prototype ***

function Tree(x, y, xDirection, yDirection, size, color) {
    this.x = x;                     // root node x pos
    this.y = y;                     // root node y pos
    this.xDirection = xDirection;   // init x direction
    this.yDirection = yDirection;   // init y direction
    this.size = size;               // number of nodes on a tree 
    this.color = color;             // tree color
}


Tree.prototype.draw = function() {
    // style settings
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    // calculate the trees coordinates
    var nodeCoords = getTreeNodeCoordinates(this.size, [this.x, this.y]);

    // finish drawing
    drawTree(nodeCoords);
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

