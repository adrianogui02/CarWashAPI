const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  username: String,
  email: { type: String, unique: true },
  dataNascimento: Date,
  password: String,
  carros: [{ marca: String, modelo: String }],
  historicoServicos: [{ data: Date, servico: String }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
