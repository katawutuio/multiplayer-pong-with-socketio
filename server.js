const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
});

const PORT = 3000;

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);

/* create event listener for listen client connect and receive
 a socket to communication with client. */
let readyPlayers = 0;

io.on('connection', (socket) => {

    console.log(`a user connected. ${socket.id}`);

    socket.on('ready', () => {

        console.log('Player ready', socket.id);

        readyPlayers++;
    
        if (readyPlayers === 2) {
            // broadcast to clients and send player two ID to set as referee
            io.emit('startGame', socket.id);
        }
    })

    
});