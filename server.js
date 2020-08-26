const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const { createSocketConnection } = require('./util/socket');
const app = express();
app.use(cors());
app.use(express.json());
routes(app);
const server = http.createServer(app);
createSocketConnection(server);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));