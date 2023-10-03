const mongoose = require('mongoose');

const DB_URI='mongodb+srv://admin:12345@walletapi.lsfvt4o.mongodb.net/CarWashAPI'

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conexão ao MongoDB estabelecida com sucesso.');
});





