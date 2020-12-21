const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
    },
});

const PORT = 8080;

io.on('connection', (socket) => {
    socket.send(`A user connected  ${socket.id}`);
});

app.listen(PORT, () => {
    console.log(`Successful server setup on port ${PORT}`);
});
