const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

router.post('/payment/credit-card', authenticateToken, PaymentController.creditCard);

router.post('/payment/pix', authenticateToken, PaymentController.pix);

// Rota para verificar o status de uma transação
router.get('/payment/status/:transactionId', PaymentController.status);

module.exports = router;

