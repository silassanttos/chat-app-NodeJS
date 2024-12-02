chat-app/
│
├── node_modules/              # Dependências do Node.js (gerado pelo npm)
├── public/                    # Arquivos públicos (frontend)
│   └── index.html              # HTML do frontend
│
├── server/                    # Lógica do servidor (backend)
│   ├── controllers/            # Controladores para lidar com requisições
│   │   └── chatController.js   # Controlador de chat
│   ├── services/               # Lógica de negócios (regra de manipulação de mensagens)
│   │   └── chatService.js      # Serviço de chat
│   ├── routes/                 # Definição das rotas do servidor
│   │   └── chatRoutes.js       # Rotas do chat
│   ├── utils/                  # Funções auxiliares
│   │   └── messageUtils.js     # Funções auxiliares para mensagens
│   ├── config/                 # Arquivos de configuração
│   │   └── serverConfig.js     # Configurações do servidor (ex: porta, configurações de Socket.io)
│   └── server.js               # Arquivo principal do servidor
│
├── package.json               # Arquivo de configuração do Node.js
└── README.md                  # Arquivo README (opcional)
