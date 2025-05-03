const express = require('express');
const router = express.Router();
const { criarAlerta, listarAlertas, deletarAlerta } = require('../controllers/alertaController');

router.post('/alertas', criarAlerta);
router.get('/alertas', listarAlertas);
router.delete('/alertas/:id', deletarAlerta);

module.exports = router;