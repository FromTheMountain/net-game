class NetGameUI {
    initializeBoard(connections, rotations) {
        container.style.width = `${50 * WIDTH}px`;
        container.style.height = `${50 * HEIGHT}px`;

        this.drawGridlines();

        // remove existing tiles
        document.querySelectorAll('.net-tile').forEach(tile => tile.remove());

        // add new tiles
        for (let i = 0; i < HEIGHT; i++) {
            for (let j = 0; j < WIDTH; j++) {
                container.innerHTML += `
                    <div class="net-tile" data-index="${i * WIDTH + j}" style="left: ${50 * j}px; \
                    top: ${50 * i}px; transform: rotate(${rotations[i * WIDTH + j] * 90}deg)">
                        <svg class="net-tile" data-index=${i * WIDTH + j} height="50" width="50">
                            ${this.getSvgInnerHTML(connections, i * WIDTH + j)}
                        </svg>
                    </div>
                `
            }
        }
    }

    drawGridlines() {
        const gridSvg = container.children[0];
        // remove existig gridlines
        gridSvg.innerHTML = '';

        // add new vertical gridlines
        for (let i = 1; i < WIDTH; i++) {
            gridSvg.innerHTML += `
                <line x1="${i*50}" y1="0" x2="${i * 50}" y2="${50 * HEIGHT}"/>
            `;
        }

        // add new horizontal gridlines
        for (let i = 1; i < HEIGHT; i++) {
            gridSvg.innerHTML += `
                <line x1="0" y1="${i*50}" x2="${50 * HEIGHT}" y2="${i * 50}"/>
            `;
        }

        // console.log(gridSvg.innerHTML);
        // console.log(container.innerHTML);
        // console.log(container.children[0].innerHTML);
    }

    getSvgInnerHTML(connections, index) {
        let html = '';

        if (connections[index] & 1 << 1) {
            // draw north line
            html += `<line x1="25" y1="0" x2="25" y2="25"/>`;
        }
        if (connections[index] & 1 << 2) {
            // draw east line
            html += `<line x1="25" y1="25" x2="50" y2="25"/>`;
        }
        if (connections[index] & 1 << 3) {
            // draw south line
            html += `<line x1="25" y1="25" x2="25" y2="50"/>`;
        }
        if (connections[index] & 1 << 4) {
            // draw west line
            html += `<line x1="0" y1="25" x2="25" y2="25"/>`;
        }
        if (game.hasOnlyOneConnection(index)) {
            html += `<rect x="20" y="20" width="10" height="10"/>`;
        }

        return html;
    }
}