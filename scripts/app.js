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
    if (e.target.classList.contains('net-tile') && !e.target.classList.contains('locked')) {
        const tileIndex = e.target.getAttribute('data-index');

        game.rotations[tileIndex] = game.rotations[tileIndex] + 1;
        e.target.style.transform = `rotate(${game.rotations[tileIndex] * 90}deg)`;
    }
}, true);

container.addEventListener('contextmenu', e => {
    e.preventDefault();
    if (e.target.classList.contains('net-tile')) {
        e.target.classList.toggle('locked');
    }
});

const setupNewGame = () => {
    game = new NetGame();
    UI.initializeBoard(game.connections, game.rotations);
}

let game;
const UI = new NetGameUI();
setupNewGame();
