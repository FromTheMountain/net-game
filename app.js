const [HEIGHT, WIDTH] = [11, 11];

const game = document.querySelector(".net-game");

let rotations = Array(HEIGHT * WIDTH).fill(0);

function initializeBoard() {
    game.style.width = `${50 * WIDTH}px`;
    game.style.height = `${50 * HEIGHT}px`;

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            const tile = document.createElement('div');
            tile.classList.add('net-tile');
            tile.setAttribute('data-index', i * WIDTH + j);
            tile.style = `left: ${50 * j}px; top: ${50 * i}px`;

            const tileCanvas = document.createElement('canvas');
            const ctx = tileCanvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(20, 20);
            ctx.stroke();

            tile.appendChild(tileCanvas);
            game.appendChild(tileCanvas);


            // game.innerHTML += `
            //     <div class="net-tile" data-index="${i * WIDTH + j}" style="left: ${50 * j}px; top: ${50 * i}px">
            //     </div>
            // `
        }
    }
}

function makeConnections() {

}

game.addEventListener('click', e => {
    if (e.target.parentNode.classList.contains('net-tile')) {
        console.log('you clicked a tile');
        const tileIndex = e.target.getAttribute('data-index');

        console.log(tileIndex);

        rotations[tileIndex] += 90;
        e.target.style.transform = `rotate(${rotations[tileIndex]}deg)`;
        console.log()
    }
});

initializeBoard();