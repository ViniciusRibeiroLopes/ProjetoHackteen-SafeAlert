const Alerta = require('../models/alert');

const criarAlerta = async (req, res) => {
    const { tipo, descricao, latitude, longitude } = req.body;
    const usuarioId = req.usuarioId;

    try {
        const alerta = await Alerta.create({
            tipo,
            descricao,
            latitude,
            longitude,
            usuarioId
        });
        res.status(201).json(alerta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar alerta', error });
    }
};
    
const listarAlertas = async (req, res) => {
    const usuarioId = req.usuarioId;

    try {
        const alertas = await Alerta.findAll({ where: { usuarioId } });
        res.json(alertas);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar alertas' });
    }
};

const deletarAlerta = async (req, res) => {
    const { id } = req.params;
    const usuarioId = req.usuarioId;

    try {
        const alerta = await Alerta.findOne({ where: { id, usuarioId } });
        if (!alerta) {
        return res.status(404).json({ erro: 'Alerta não encontrado' });
    }
    await alerta.destroy();
    res.status(200).json({ message: 'Alerta excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao deletar alerta' });
    }
};

module.exports = {
    criarAlerta,
    listarAlertas,
    deletarAlerta
};