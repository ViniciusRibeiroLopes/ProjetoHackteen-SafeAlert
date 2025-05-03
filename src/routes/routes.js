
const express = require('express');
const router = express.Router();
const { buscarId, atualizaUsuario, deletaUsuario } = require('../controllers/controller');

router.get('/users/:id', buscarId); 
router.put('/users/:id', atualizaUsuario); 
router.delete('/users/:id', deletaUsuario); 

module.exports = router;
