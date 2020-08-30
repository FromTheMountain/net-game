// some constants
const [HEIGHT, WIDTH] = [15, 15];

// get DOM elements
const container = document.querySelector(".net-game");
const tiles = container.children;

// keep on track of each tile's rotation
// todo: add this to game.js
let rotations = Array(HEIGHT * WIDTH).fill(0);

container.addEventListener('click', e => {
    if (e.target.classList.contains('net-tile')) {
        const tileIndex = e.target.getAttribute('data-index');

        rotations[tileIndex] = (rotations[tileIndex] + 90);
        e.target.style.transform = `rotate(${rotations[tileIndex]}deg)`;
        console.log()
    }
}, true);


const UI = new NetGameUI();
const game = new NetGame();

UI.initializeBoard();
game.makeConnections();
UI.drawConnections(game.connections);