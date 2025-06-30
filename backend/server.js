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

  async initDb() { 
    try {
      await dbInit(); 
      console.log('Inicialização do banco de dados concluída.'); 
    } catch (err) {
      console.error('Erro ao inicializar o banco de dados:', err);
      process.exit(1);
    }
  }

  async start() { 
    try {
      await this.initDb(); 
      this.app.listen(this.port, () => {
        console.log(`Servidor rodando na porta ${this.port}`);
      });
    } catch (error) {
      console.error('Falha crítica ao iniciar o servidor:', error);
      process.exit(1); 
    }
  }
}

module.exports = Server;