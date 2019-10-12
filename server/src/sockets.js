const socketIo = require('socket.io');

const init = (server) => {
  const io = socketIo(server);
  io.on('connection', (socket) => {
    // console.log(socket);
    console.log('client connected');
    io.emit(
      'message-client-connected',
      `Client with id ${socket.id} was connected`
    );
  });
};

module.exports = {
  init
};
