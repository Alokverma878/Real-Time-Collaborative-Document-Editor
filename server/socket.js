const { Server } = require('socket.io');
const Document = require('./models/Document');

module.exports = function (server) {
  const io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', socket => {
    socket.on('join-doc', async docId => {
      socket.join(docId);
      const doc = await Document.findById(docId);
      socket.emit('load-doc', doc?.content || {});
    });

    socket.on('send-changes', ({ docId, delta }) => {
      socket.broadcast.to(docId).emit('receive-changes', delta);
    });

    socket.on('save-doc', async ({ docId, content }) => {
      await Document.findByIdAndUpdate(docId, { content });
    });
  });
};