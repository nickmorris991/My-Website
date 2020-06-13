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
    CTX.beginPath();

    // draw node
    CTX.arc(currentRoot[0], currentRoot[1], NODESIZE, 0, Math.PI * 2, false);

    // connect with children if they exist
    if(leftChild != undefined) {
        CTX.moveTo(currentRoot[0], currentRoot[1]);           
        CTX.lineTo(leftChild[0], leftChild[1]);          
        if (rightChild != undefined) {
            CTX.moveTo(currentRoot[0], currentRoot[1]); 
            CTX.lineTo(rightChild[0], rightChild[1]);
        }
        CTX.stroke();
    }
    CTX.fill();
}


function getTreeNodeCoordinates(size, root) {
    var coords = [];  
    coords.push(root);

    for (var i=0; i < size; i+=1) {
        // get child coordinates of the current node
        var childNodes = calculateChildNodePos(coords[i], coords);

        // if we haven't already, add them to our collection of nodes
        coords.push(childNodes.left);
        coords.push(childNodes.right);
    }
    return coords;
}


function calculateChildNodePos(node, coords) {
    var nodeOffset = 40; // distance from each other

    return {
        left: [node[0] - nodeOffset, node[1] + nodeOffset],
        right: [node[0] + nodeOffset, node[1] + nodeOffset]
    };
}


function getRandomColor() {
    var letters = 'ABCDEF';
    var hexOptions = '123456789ABCDEF';
    var color = '#';
    color += letters[Math.floor(Math.random() * 6)];
    for (var i = 0; i < 5; i++) {
        color += hexOptions[Math.floor(Math.random() * 15)];
    }
    return color;
}


function getTreeVelocity(alt) {
    speed = Math.random();
    // min speed, no idle trees
    if (speed < 0.2) speed += 0.2; 
    var directions = {
        0: { x: speed, y: speed },
        1: { x: speed, y: -speed },
        2: { x: -speed, y: speed },
        3: { x: -speed, y: -speed },
        4: { x: -speed, y: 0 },
        5: { x: speed, y: 0 }
    };
    return directions[alt % 6];
}

