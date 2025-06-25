const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const socketSetup = require('./socket');
const documentRoutes = require('./routes/document');
//const authRoutes = require('./auth/authRoutes');

dotenv.config();
const app = express();
const server = http.createServer(app);
socketSetup(server);

app.use(cors());
app.use(express.json());
app.use('/api/documents', documentRoutes);
//app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is up');
});

console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);


mongoose.connect("mongodb://localhost:27017/collabeditor")
  .then(() => {
    server.listen(5000, () => console.log('Server running on port 5000'));
  }).catch(err => console.error(err));