class NetGame {
    constructor() {
        // every tile starts out unvisited
        this.connections = Array(WIDTH * HEIGHT).fill(0);

        // every tile gets a random rotation
        this.rotations = [...Array(WIDTH * HEIGHT)].map(() => Math.floor(Math.random() * 4));

        // and every tile gets a connection to the center
        this.makeConnections();
    }

    makeConnections() {
        /* for connections, we use five bits: WSENV, West South East North Visited
         * e.g. 00000 means unvisited, 10101 means visited and connected West and
         * East, etc.
         * the reason we use a Visited bit is to make sure each tile is only pushed
         * to the stack once
         */

        // connect the middle tile to the tile on its west and mark both tiles as
        // visited
        const middleTile = WIDTH * Math.floor(HEIGHT / 2) + Math.floor(WIDTH / 2);
        console.log(middleTile);

        this.connections[middleTile] |= 1 << 0 | 1 << 4;
        this.connections[middleTile - 1] |= 1 << 0 | 1 << 2;

        // mark the tile to its north as visited and push it to the stack
        this.connections[middleTile - WIDTH] |= 1 << 0;
        let stack = [middleTile - WIDTH];

        while (stack.length !== 0) {
            // take the first element of the stack
            const elem = stack.pop();

            // we have a tile that is visited but not yet connected
            // we need to connect it to a tile that is connected

            // get shuffled list of neighbours
            let neighbours = this._getNeighbours(elem);
            shuffle(neighbours);

            let connected = false;
            neighbours.forEach(([neighbour, direction]) => {
                if (!(this.connections[neighbour] & 1 << 0)) {
                    // this tile has not been visited
                    stack.push(neighbour);
                    this.connections[neighbour] |= 1 << 0;
                } else if (!connected && this.connections[neighbour] >> 1) {
                    // this tile already has a connection
                    console.log(`connecting ${elem} and ${neighbour}`);
                    this.connections[elem] |= 1 << direction;
                    this.connections[neighbour] |= 1 << this._opposite(direction);
                    connected = true;
                }
            });
        }
    }

    hasOnlyOneConnection(tile) {
        return Number.isInteger(Math.log2(this.connections[tile] >> 1));
    }

    _getNeighbours(tile) {
        return [
            [(tile - WIDTH + WIDTH * HEIGHT) % (WIDTH * HEIGHT), 1], // north
            [(tile + 1) % WIDTH + tile - tile % WIDTH, 2], // east
            [(tile + WIDTH) % (WIDTH * HEIGHT), 3], // south
            [(tile + WIDTH - 1) % WIDTH + tile - tile % WIDTH, 4] // west
        ];
    }

    _opposite(direction) {
        return (direction + 1) % 4 + 1;
    }
}