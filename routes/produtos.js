const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ControladorProduto');

// Rota para criar um novo produto
router.post('/produtos', ProductController.create);

// Rota para listar todos os produtos
router.get('/produtos', ProductController.list);

// Rota para atualizar um produto existente
router.put('/produtos/:id', ProductController.update);

// Rota para deletar um produto
router.delete('/produtos/:id', ProductController.delete);

module.exports = router;

