const { v4: uuidv4 } = require('uuid');
exports.createRoom = (req,res) => {
  const roomID = uuidv4();
  const {roomName, userName, privateRoom} = req.body;
  //store in database as room Active
  res.status(200).json({
    userName,
    roomName,
    roomID
  })
}