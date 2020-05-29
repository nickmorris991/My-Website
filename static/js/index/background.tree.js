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
    // correct off canvas animations (bounce off the screen effect)
    if (this.x > canvas.width || this.x < 0) {
        this.xDirection = -this.xDirection;
    }
    if (this.y > canvas.height || this.y < 0) {
        this.yDirection = -this.yDirection;
    }

    // update pos & draw
    this.x += this.xDirection;
    this.y += this.yDirection;
    this.draw();
}


