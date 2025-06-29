// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const profissionalRoutes = require('./routes/profissionalRoutes');
// const dbInit = require('./db/dbInit');

// class Server {
//   constructor() {
//     this.app = express();
//     this.port = process.env.PORT || 3000;
//     this.configureMiddlewares();
//     this.routes();
//     //this.initDb();
//   }

//   configureMiddlewares() {
//     this.app.use(express.json());
//     this.app.use(cors());
//     this.app.use(morgan('dev'));
//   }

//   routes() {
//     this.app.use('/api/profissionais', profissionalRoutes);

//     this.app.get('/', (req, res) => {
//       res.send('API de Profissionais está funcionando!');
//     });

//     this.app.use((err, req, res, next) => {
//       console.error(err.stack);
//       res.status(500).json({ error: 'Erro interno do servidor.' });
//     });
//   }

//   async initDb() {
//     try {
//       await dbInit();
//       console.log('Tabela criada com sucesso!');
//     } catch (err) {
//       console.error('Erro ao criar a tabela: ', err);
//     }
//   }

//   async start() { // <--- TORNE ESTE MÉTODO ASYNC
//     try {
//       await this.initDb(); // <--- AGORA AQUI É ONDE VOCÊ AGUARDA A INICIALIZAÇÃO DO BANCO
//       this.app.listen(this.port, () => {
//         console.log(`Servidor rodando na porta ${this.port}`);
//       });
//     } catch (error) {
//       console.error('Falha crítica ao iniciar o servidor:', error);
//       process.exit(1); // Encerra a aplicação se houver falha ao iniciar o servidor
//     }
//   }
// }

// module.exports = Server;

// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const profissionalRoutes = require('./routes/profissionalRoutes');
const dbInit = require('./db/dbInit'); 

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.configureMiddlewares();
    this.routes();
  }

  configureMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  routes() {
    this.app.use('/api/profissionais', profissionalRoutes);

    this.app.get('/', (req, res) => {
      res.send('API de Profissionais está funcionando!');
    });

    this.app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Erro interno do servidor.' });
    });
  }

  async initDb() { // Este método está OK
    try {
      await dbInit(); // Chama a função dbInit que está em db/dbInit.js
      console.log('Inicialização do banco de dados concluída.'); // Log mais descritivo
    } catch (err) {
      console.error('Erro ao inicializar o banco de dados:', err);
      // É crucial que se o banco não inicializar, a aplicação não suba.
      // Pode ser útil encerrar o processo aqui.
      process.exit(1);
    }
  }

  async start() { // <--- TORNE ESTE MÉTODO ASYNC
    try {
      await this.initDb(); // <--- AGORA AQUI É ONDE VOCÊ AGUARDA A INICIALIZAÇÃO DO BANCO
      this.app.listen(this.port, () => {
        console.log(`Servidor rodando na porta ${this.port}`);
      });
    } catch (error) {
      console.error('Falha crítica ao iniciar o servidor:', error);
      process.exit(1); // Encerra a aplicação se houver falha ao iniciar o servidor
    }
  }
}

module.exports = Server;