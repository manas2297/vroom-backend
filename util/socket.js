const socketio = require('socket.io');
const { addUser, getUsersInRoom } = require('../users');

exports.createSocketConnection = server => {
  const io = socketio(server);

  //Connection event
  io.on('connection', (socket) => {
    socket.on('join', (userData, callback) => {
      const user = addUser(userData, socket.id);
      console.log(user);
      socket.emit('allUsers', getUsersInRoom(userData.roomId, socket.id));
    });
  });
}