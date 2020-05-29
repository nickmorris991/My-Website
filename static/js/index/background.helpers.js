function drawTree(nodeCoords) {
    let rootAdjustment = 1; // find left & right child of current root

    // loop over calculated coordinates, drawing each node & connective branches
    for (let i=0; i < nodeCoords.length; i++) {
        let currentRoot = nodeCoords[i];
        let leftChild = nodeCoords[i+rootAdjustment];
        let rightChild = nodeCoords[i+rootAdjustment+1];
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


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getTreeDirection(alt) {
    speed = 0.8;
    direction = {
        x: 0,
        y: 0
    };
    switch(alt % 6) {
        case 0:
            direction.x = 0;
            direction.y = speed;
            break;
        case 1:
            direction.x = 0;
            direction.y = -speed;
            break;
        case 2:
            direction.x = speed;
            direction.y = speed;
            break;
        case 3:
            direction.x = -speed;
            direction.y = -speed;
            break;
        case 4:
            direction.x = -speed;
            direction.y = speed;
            break;
        case 5:
            direction.x = speed;
            direction.y = -speed;
            break;
    }
    return direction;
}
