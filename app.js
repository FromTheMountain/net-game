const [HEIGHT, WIDTH] = [11, 11];

const game = document.querySelector(".net-game");

let rotations = Array(HEIGHT * WIDTH).fill(0);

function initializeBoard() {
    game.style.width = `${50 * WIDTH}px`;
    game.style.height = `${50 * HEIGHT}px`;

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            game.innerHTML += `
                <svg class="net-tile" data-index=${i * WIDTH + j} height="50" width="50" style="left: ${50 * j}px; top: ${50 * i}px">
                    <line x1="0" y1="0" x2="20" y2="20"/>
                </svg>
            `
        }
    }
}

function makeConnections() {

}

game.addEventListener('click', e => {
    if (e.target.classList.contains('net-tile')) {
        console.log('you clicked a tile');
        const tileIndex = e.target.getAttribute('data-index');

        rotations[tileIndex] += 90;
        e.target.style.transform = `rotate(${rotations[tileIndex]}deg)`;
        console.log()
    }
});

initializeBoard();