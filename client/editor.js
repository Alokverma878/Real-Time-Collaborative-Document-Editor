const socket = io('http://localhost:5000');
const editor = new Quill('#editor', { theme: 'snow' });
const docId = '6853a4824d8ba0de16aac952';

socket.emit('join-doc', docId);

socket.on('load-doc', content => {
  editor.setContents(content);
});

editor.on('text-change', (delta, old, source) => {
  if (source !== 'user') return;
  socket.emit('send-changes', { docId, delta });
});

socket.on('receive-changes', delta => {
  editor.updateContents(delta);
});

setInterval(() => {
  socket.emit('save-doc', { docId, content: editor.getContents() });
}, 2000);