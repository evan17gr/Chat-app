const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = socketIo(server);

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
});

io.on('connection', (socket) => {
    socket.send(`A user connected to the socket ${socket.id}`);
});

app.listen(PORT, () => {
    console.log(`Successful server setup on ports ${PORT}`);
});
