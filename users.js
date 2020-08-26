const users = {};
const socketToRoom = {};
const addUser = (userData, socketId) => {

  let {
    name,
    room,
    roomId
  } = userData;
  if(!name) name = "anonymous";
  if(users[roomId]) {
    users[roomId].push(socketId);
  } else {
    users[roomId] = [socketId];
  }
  socketToRoom[socketId] = roomId;
  console.log(users);
  const user = {roomId,name, room};
  return {user};
}

const removeUser = (socketId) => {
  console.log(socketId);
  const roomData = socketToRoom[socketId];
  if(!roomData) throw new Error;
  const index = users[roomData].findIndex(id => id === socketId );
  if(index !== -1) return users[roomData].splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (roomId, socketId) => users[roomId].filter(id => id !== socketId );

module.exports = { addUser, removeUser, getUser, getUsersInRoom };