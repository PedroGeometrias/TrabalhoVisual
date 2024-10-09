const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors()); // Permitir CORS, se necessário

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (por exemplo, 'home.html')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Rotas de pagamento (exemplo)
app.post('/payment/cartao', (req, res) => {
  res.json({ status: 'Pagamento com Cartão de Crédito Concluído' });
});

app.post('/payment/pix', (req, res) => {
  res.json({ status: 'Pagamento via PIX Concluído' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

