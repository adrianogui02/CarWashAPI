const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); // Importe o módulo cors
const port = 3030;
const db = mongoose.connection;

const authRoutes = require('./Auth/routes/authRoutes');

app.use(express.json());

// Configuração do CORS
app.use(cors()); // Adicione esta linha para habilitar o CORS

// Rotas de autenticação
app.use('/auth', authRoutes);

const DB_URI = 'mongodb+srv://admin:12345@walletapi.lsfvt4o.mongodb.net/CarWashAPI';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', console.error.bind(console, 'Erro na conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conexão ao MongoDB estabelecida com sucesso.');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
