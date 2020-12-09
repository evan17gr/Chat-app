const express = require('express');
const http = require('http');
const { ppid } = require('process');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

const PORT = 8080;

app.use('/', express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');
});

app.listen(PORT, () => {
    console.log(`Successful server setup on port ${PORT}`);
});
