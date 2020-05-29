// *** constants/globals ***
const canvas = document.getElementById("anim-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let binaryTreeArray;        // each binary tree representation in this array.
const nodeSize = 13;        // size of each node on a tree
const numOfTrees = 3;       // number of trees to animate
const treeColor = 'white';  // color of trees in animation


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


// *** helpers ***

function drawTree(nodeCoords) {
    var rootAdjustment = 1; // find left & right child of current root

    // loop over calculated coordinates, drawing each node & connective branches
    for (var i=0; i < nodeCoords.length; i++) {
        var currentRoot = nodeCoords[i];
        var leftChild = nodeCoords[i+rootAdjustment];
        var rightChild = nodeCoords[i+rootAdjustment+1];
        connectNodes(currentRoot, leftChild, rightChild);
        rootAdjustment++;
    }
}

function connectNodes(currentRoot, leftChild, rightChild) {
    ctx.beginPath();
    // draw node
    ctx.arc(currentRoot[0], currentRoot[1], nodeSize, 0, Math.PI * 2, false);

    // connect with children if they exist
    if(leftChild != undefined) {
        ctx.moveTo(currentRoot[0], currentRoot[1]);           
        ctx.lineTo(leftChild[0], leftChild[1]);          
        if (rightChild != undefined) {
            ctx.moveTo(currentRoot[0], currentRoot[1]); 
            ctx.lineTo(rightChild[0], rightChild[1]);
        }
        ctx.stroke();
    }
    ctx.fill();
}

function getTreeNodeCoordinates(size, root) {
    var coords = [];         // complete list of coordinates in the tree
    var nextRowCoords = [];  // tracks the coordinates of the next row
    var rowNumber = 1;       // tracks the current row number

    coords.push(root);
    for (var i=0; i < size; i+=1) {
        // get child coordinates of the current node
        var childNodes = calculateChildNodePos(coords[i]); 

        // add them to our collection of nodes for the next row
        nextRowCoords.push(childNodes.left);
        nextRowCoords.push(childNodes.right);

        // check if we've reached the complete 'size' or the end of a row
        if ((coords.length + nextRowCoords.length >= size) || (nextRowCoords.length == Math.pow(2, rowNumber))) {
            rowNumber += 1;
            coords = coords.concat(nextRowCoords);
            nextRowCoords = [];
        }
    }
    return coords;
}


function calculateChildNodePos(node) {
    let offset = 40;
    return {
        left: [node[0] - offset, node[1] + offset],
        right: [node[0] + offset, node[1] + offset]
    };
}


function createTrees() {
    binaryTreeArray = [];
    for (let i=0; i < numOfTrees; i++) {
        let color = treeColor;
        let size = Math.random() * 4;
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


// *** event listeners ***

window.addEventListener('resize',
    function() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        createTrees();
    }
)


createTrees();
animate();


