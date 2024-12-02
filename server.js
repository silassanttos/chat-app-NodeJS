const express = require('express');
const http = require('http');
const { Socket } = require('socket.io');

const app = express()
const server = http.createServer(app);
const io = Socket(server);

// Configuração do Socket.io

io.on('connection', (socket) => {
    console.log('Um usuário se conectou');
    
    // Quando o servidor receber uma mensagem, ele envia para todos os clientes
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);  // Envia a mensagem para todos os clientes conectados
    });
  
    socket.on('disconnect', () => {
      console.log('Usuário desconectado');
    });
  });
  
  app.use(express.static('public'));
  
  app.use('/chat', chatRoutes);
  
  server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });