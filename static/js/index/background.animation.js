// *** constants/globals ***
const canvas = document.getElementById("anim-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


let binaryTreeArray;                  // each binary tree representation in this array.
const nodeSize = 6;                   // size of each node on a tree
const numOfTrees = 25;                // number of trees to animate


function createTrees() {
    binaryTreeArray = [];
    for (let i=0; i < numOfTrees; i++) {
        let color = getRandomColor();
        let size = Math.random() * 4;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let xDirection = Math.random();
        let yDirection = Math.random();
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

