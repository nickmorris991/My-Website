const CANVAS = document.getElementById("anim-canvas");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
const CTX = CANVAS.getContext('2d');

let binaryTreeArray;    // each binary tree goes in this array.
const NODESIZE = 6;     // size of each node on a tree
const NUMOFTREES = 50;  // number of trees to animate


function createTrees() {
    binaryTreeArray = [];
    for (let i=0; i < NUMOFTREES; i++) {
        // style settings
        let color = getRandomColor();
        let size = Math.floor(Math.random() * 4) + 1;
        // set location. Spawning from behind the header-card & index-table
        let headerRect = document.getElementById("header-card").getBoundingClientRect();
        let rand = Math.random();
        if (rand < 0.2) rand = rand + (innerHeight * 0.2);
        let x = (headerRect.left + headerRect.right)/2;
        let y = (rand * (innerHeight - (innerHeight * 0.4)));
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

