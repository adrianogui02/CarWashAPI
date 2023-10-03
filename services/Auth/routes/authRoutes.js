const express = require('express');
const router = express.Router();
const authController = require('../controllers/Authcontroller'); // Importe o controlador de autenticação

// Rota de cadastro de usuário
router.post('/signup', authController.signup);

// Rota de login de usuário
router.post('/login', authController.login);

module.exports = router;
