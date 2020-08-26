const socketio = require('socket.io');
const { addUser, getUsersInRoom, removeUser } = require('../users');

exports.createSocketConnection = server => {
  const io = socketio(server);

  //Connection event
  io.on('connection', (socket) => {
    socket.on('join', (userData, callback) => {
      const user = addUser(userData, socket.id);
      console.log(user);
      socket.broadcast.to(userData.roomId).emit('message', {user:'Admin', text:`${user.user.name} Joined the room`});
      socket.join(userData.roomId);
      socket.emit('allUsers', getUsersInRoom(userData.roomId, socket.id));
    });
    socket.on('disconnect', () => {
      try {
        const user = removeUser(socket.id);
      if(user){
        io.to(user.roomId).emit('message', {user:'Admin', text: `${user.name} has left`});
      }
      } catch(e) {
        console.error(e)
      }
      
    })
  });
}