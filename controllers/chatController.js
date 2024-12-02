const chatService = require('../services/chatService');

exports.sendMessage = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).send({ error: 'Mensagem é obrigatória' });
  }

  // Envia a mensagem para todos os clientes conectados
  chatService.sendMessageToAllClients(message);

  return res.status(200).send({ message: 'Mensagem enviada com sucesso' });
};

exports.getMessages = (req, res) => {
  const messages = chatService.getAllMessages();
  return res.status(200).send({ messages });
};
