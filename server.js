const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an instance of Express application
const app = express();
// Create an HTTP server using the Express app
const server = http.createServer(app);
// Initialize socket.io with the HTTP server
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Listen for new client connections
io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});