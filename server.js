const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = 3000;

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);

/* create event listener for listen client connect and receive
 a socket to communication with client. */
io.on('connection', (socket) => {
    console.log('a user connected.');
});