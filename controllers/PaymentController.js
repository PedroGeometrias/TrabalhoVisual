const { Transaction } = require('../models');

// Simular pagamento com cartão de crédito
exports.creditCard = async (req, res) => {
  const { userId, valorTotal, numeroCartao, validade, cvv } = req.body;

  // Simulação de verificação de cartão (validação básica fictícia)
  if (!numeroCartao || !validade || !cvv) {
    return res.status(400).json({ message: 'Dados do cartão inválidos' });
  }

  // Criar uma transação simulada
  const transaction = await Transaction.create({
    userId,
    valorTotal,
    metodoPagamento: 'cartão de crédito',
    status: 'concluído' // Simular pagamento bem-sucedido
  });

  res.status(200).json({ message: 'Pagamento realizado com sucesso', transaction });
};

// Simular pagamento com PIX
exports.pix = async (req, res) => {
  const { userId, valorTotal } = req.body;

  // Simulando o pagamento via PIX
  const transaction = await Transaction.create({
    userId,
    valorTotal,
    metodoPagamento: 'PIX',
    status: 'concluído' // Simular pagamento bem-sucedido
  });

  res.status(200).json({ message: 'Pagamento via PIX realizado com sucesso', transaction });
};

// Consultar o status de uma transação
exports.status = async (req, res) => {
  const { transactionId } = req.params;

  // Encontrar a transação no banco de dados
  const transaction = await Transaction.findByPk(transactionId);

  if (!transaction) {
    return res.status(404).json({ message: 'Transação não encontrada' });
  }

  res.status(200).json(transaction);
};

