// Esse arquivo controla e organiza o carrinho
const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');

// Rota para adicionar um produto ao carrinho
router.post('/carrinho/adicionar', CarrinhoController.add);

// Rota para remover um produto do carrinho
router.delete('/carrinho/remover/:id', CarrinhoController.remove);

// Rota para visualizar o conteúdo do carrinho
router.get('/carrinho', CarrinhoController.view);

module.exports = router;

