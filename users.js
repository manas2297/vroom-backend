const users = {};
const socketToRoom = {};
const addUser = (userData, socketId) => {

  const {
    name,
    room,
    roomId
  } = userData;
  
  if(users[roomId]) {
    users[roomId].push(socketId);
  } else {
    users[roomId] = [socketId];
  }
  socketToRoom[socketId] = roomId;

  // const existingUser = users.find((user)=> user.room === room && user.name === name);
  // if(!name || !room) return {error: 'Username and room are required.'};
  // if(existingUser) return {error:'Username is taken'};

  const user = {roomId,name, room};
  return {user};
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (roomId, socketId) => users[roomId].filter(id => id !== socketId );

module.exports = { addUser, removeUser, getUser, getUsersInRoom };