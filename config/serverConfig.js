module.exports = {
    PORT: process.env.PORT || 3000,  // Usa a variável de ambiente ou a porta 3000
    SOCKET_IO_OPTIONS: {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    }
  };
  