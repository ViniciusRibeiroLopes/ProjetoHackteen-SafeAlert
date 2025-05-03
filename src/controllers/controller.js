const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Criar um usuário
const criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, telefone } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }
    const senhaHash = await bcrypt.hash(senha, 10);
    const user = await User.create({ nome, email, senha: senhaHash, telefone });
    res.status(201).json(user); 
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

const buscarId = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

// Atualizar usuário
const atualizaUsuario = async (req, res) => {
  try {
    const { nome, telefone } = req.body;
    const updated = await User.update({ nome, telefone }, { where: { id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

const deletaUsuario = async (req, res) => {
    try {
      const resultado = await User.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: 'Usuário excluído com sucesso', resultado });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  };

module.exports = { criarUsuario, buscarId, atualizaUsuario, deletaUsuario };
