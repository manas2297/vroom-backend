const roomRoutes = require('./rooms');
module.exports = app => {
  app.use('/room', roomRoutes);
};
