const CANVAS = document.getElementById("anim-canvas");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
const CTX = CANVAS.getContext('2d');

let binaryTreeArray;    // each binary tree goes in this array.
const NODESIZE = 6;     // size of each node on a tree
const NUMOFTREES = 40;  // number of trees to animate


function createTrees() {
    binaryTreeArray = [];
    for (let i=0; i < NUMOFTREES; i++) {
        // style settings
        let color = getRandomColor();
        let size = Math.floor(Math.random() * 4) + 1;
        // location avoiding screen overflow
        let rand1 = Math.random();
        let rand2 = Math.random();
        if (rand1 < 0.1) rand1 = rand1 + 0.1;
        if (rand2 < 0.1) rand2 = rand2 + 0.1;
        let x = (rand1 * (innerWidth - 125));
        let y = (rand2 * (innerHeight - 125));
        // speed and tree creation
        let vel = getTreeVelocity(i);
        let xDirection = vel.x;
        let yDirection = vel.y;
        binaryTreeArray.push(new Tree(x, y, xDirection, yDirection, size, color));
    }
}


function animate() {
    requestAnimationFrame(animate);
    CTX.clearRect(0,0, innerWidth, innerHeight); 

    for (let i=0; i < binaryTreeArray.length; i++) {
        binaryTreeArray[i].update();
    }
}


window.addEventListener('resize',
    function() {
        CANVAS.width = innerWidth;
        CANVAS.height = innerHeight;
        createTrees();
    }
)


createTrees();
animate();

