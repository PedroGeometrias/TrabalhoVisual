# Sistema de E-commerce

Este é um sistema de e-commerce simples com suporte a produtos, carrinho de compras e simulação de pagamento via cartão de crédito e PIX.

## Como rodar o projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   ```bash
   node server.js
   ```

4. O servidor rodará em `http://localhost:3000/`.

## Rotas

- **Produtos**:
  - `GET /produtos`: Listar todos os produtos.
  - `POST /produtos`: Adicionar um novo produto.
  - `PUT /produtos/:id`: Atualizar um produto existente.
  - `DELETE /produtos/:id`: Remover um produto.

- **Carrinho**:
  - `POST /cart/add`: Adicionar um produto ao carrinho.
  - `GET /cart`: Visualizar o carrinho.
  - `DELETE /cart/remove/:id`: Remover um produto do carrinho.

- **Pagamentos**:
  - `POST /payment/credit-card`: Simular pagamento com cartão de crédito.
  - `POST /payment/pix`: Simular pagamento via PIX.
