// some constants
let [HEIGHT, WIDTH] = [3, 3];

// get DOM elements
const form = document.querySelector('.net-form');
const container = document.querySelector('.net-grid');
const tiles = container.children;

form.addEventListener('submit', e => {
    e.preventDefault();

    WIDTH = HEIGHT = parseInt(form.size.value);
    form.reset();
    setupNewGame();
})

container.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('net-tile')) {
        console.log('tile');
        const tileIndex = e.target.getAttribute('data-index');

        game.rotations[tileIndex] = (game.rotations[tileIndex] + 90);
        e.target.style.transform = `rotate(${game.rotations[tileIndex]}deg)`;
        console.log()
    }
}, true);

const setupNewGame = () => {
    console.log("heyo");
    UI.initializeBoard();
    game = new NetGame();
    game.makeConnections();
    UI.drawConnections(game.connections);
}

let game;
const UI = new NetGameUI();
setupNewGame();
