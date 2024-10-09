const { Cart, CartItem, Product } = require('../models');

// Adicionar um produto ao carrinho
exports.add = async (req, res) => {
  try {
    const { productId, userId, quantidade } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

    const precoTotal = product.preco * quantidade;

    let cart = await Cart.findOne({ where: { userId } });
    if (!cart) cart = await Cart.create({ userId });

    const cartItem = await CartItem.create({
      cartId: cart.id,
      productId,
      quantidade,
      precoTotal
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar produto ao carrinho', error });
  }
};

// Remover um produto do carrinho
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CartItem.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Produto não encontrado no carrinho' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover produto do carrinho', error });
  }
};

// Visualizar itens no carrinho
exports.view = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({ include: Product });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao visualizar carrinho', error });
  }
};

