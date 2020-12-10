const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

app.listen(PORT, () => {
    console.log(`Successful server setup on port ${PORT}`);
});
