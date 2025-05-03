const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'sua_chave_secreta';

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user)
        return res.status(404).json({ message: 'Usuário não encontrado' });
        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch)
        return res.status(401).json({ message: 'Senha inválida' });

        const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao autenticar', error });
    }
};

module.exports = { login };
