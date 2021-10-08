const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'src','public')));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

(() => {
  server.listen(3000, () => {
    console.log('server is running');
  });
})()