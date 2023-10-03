const User = require('../../DB/models/users');

// Função para cadastrar um novo usuário
exports.signup = async (req, res) => {
  try {
    const { nome, sobrenome, username, email, dataNascimento, password } = req.body;
    const user = new User({ nome, sobrenome,username, email, dataNascimento, password });
    await user.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar o usuário.' });
  }
};



// Função para fazer login de usuário
exports.login = async (req, res) => {
  try {
    // Extrair os dados do corpo da solicitação

    const { username, password } = req.body;
    console.log(username, password);

    // Verifique se o usuário existe pelo email ou pelo username
    const user = await User.findOne({
       username,
       password,
    });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    // Verificar se a senha fornecida corresponde à senha armazenada no banco de dados
    if (user.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Se tudo estiver correto, você pode retornar os dados do usuário
    res.json({
      message: 'Login bem-sucedido',
      user: {
        nome: user.nome,
        sobrenome: user.sobrenome,
        username: user.username,
        email: user.email,
        carros: user.carros,
        historicoServicos: user.historicoServicos,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login', details: error.message });
  }
};
  
