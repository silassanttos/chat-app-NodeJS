let messages = [];

exports.sendMessageToAllClients = (message) => {
  // Salva a mensagem no histórico
  messages.push(message);

  // Aqui você pode emitir a mensagem para todos os clientes conectados via Socket.io
  io.emit('chat message', message);
};

exports.getAllMessages = () => {
  return messages;  // Retorna todas as mensagens armazenadas
};
