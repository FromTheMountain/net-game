class NetGameUI {
    initializeBoard() {
        container.style.width = `${50 * WIDTH}px`;
        container.style.height = `${50 * HEIGHT}px`;

        for (let i = 0; i < HEIGHT; i++) {
            for (let j = 0; j < WIDTH; j++) {
                container.innerHTML += `
                    <div class="net-tile" data-index="${i * WIDTH + j}" style="left: ${50 * j}px; top: ${50 * i}px">
                        <svg class="net-tile" data-index=${i * WIDTH + j} height="50" width="50">
                        </svg>
                    </div>
                `
            }
        }
    }

    drawConnections(connections) {
        for (let i = 0; i < WIDTH * HEIGHT; i++) {
            const svg = tiles[i].children[0];

            if (game.hasOnlyOneConnection(i)) {
                svg.innerHTML += `
                    <rect x="20" y="20" width="10" height="10"/>
                `
            }
            if (connections[i] & 1 << 1) {
                // draw north line
                svg.innerHTML += `
                    <line x1="25" y1="0" x2="25" y2="20"/>
                `
            }
            if (connections[i] & 1 << 2) {
                // draw east line
                svg.innerHTML += `
                    <line x1="30" y1="25" x2="50" y2="25"/>
                `
            }
            if (connections[i] & 1 << 3) {
                // draw south line
                svg.innerHTML += `
                    <line x1="25" y1="30" x2="25" y2="50"/>
                `
            }
            if (connections[i] & 1 << 4) {
                // draw west line
                svg.innerHTML += `
                    <line x1="0" y1="25" x2="20" y2="25"/>
                `
            }
        }
    }
}