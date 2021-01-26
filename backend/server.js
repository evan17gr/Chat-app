const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = socketio(server);

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
