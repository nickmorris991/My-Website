function Tree(x, y, xDirection, yDirection, size, color) {
    this.x = x;                     // root node x pos
    this.y = y;                     // root node y pos
    this.childrenCoords = [];       // collection of x, y pos of children nodes
    this.xDirection = xDirection;   // init x direction
    this.yDirection = yDirection;   // init y direction
    this.size = size;               // number of nodes on a tree 
    this.color = color;             // tree color
}


Tree.prototype.draw = function() {
    // style settings
    CTX.fillStyle = this.color;
    CTX.strokeStyle = this.color;

    // calculate the trees coordinates
    var nodeCoords = getTreeNodeCoordinates(this.size, [this.x, this.y]);

    // add them to our collection of child nodes
    Array.prototype.push.apply(this.childrenCoords, nodeCoords);
    
    // finish drawing
    drawTree(nodeCoords);
}


Tree.prototype.update = function() {
    // correct off canvas animations (bounce off the screen effect)
    for(let i=0; i < this.childrenCoords.length; i++) {
        if (this.childrenCoords[i][1] > CANVAS.height || this.childrenCoords[i][1] < 0) {
            this.yDirection = -this.yDirection;
            break;
        }
        if (this.childrenCoords[i][0] > CANVAS.width || this.childrenCoords[i][0] < 0) {
            this.xDirection = -this.xDirection;
            break;
        }
    }

    // update pos & draw
    this.x += this.xDirection;
    this.y += this.yDirection;
    this.childrenCoords = [];
    this.draw();
}
