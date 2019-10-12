const socketIo = require('socket.io');

const init = (server) => {
  const io = socketIo(server);
  console.log('socket server is listening');
  io.on('connection', (socket) => {
    // console.log(socket);
    console.log('client connected');
  });
};

module.exports = {
  init
};
