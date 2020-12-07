const express = require('express');
const server = require('http');
const io = require('socket.io');
const { createServer } = require('tls');

const app = express();

const server = createServer(app);

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Successful server setup on port ${PORT}`);
});
