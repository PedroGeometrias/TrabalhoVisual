const { Product } = require('../models');

// Criar um novo produto
exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

// Listar todos os produtos
exports.list = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar produtos', error });
  }
};

// Atualizar um produto
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, { where: { id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

// Deletar um produto
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};

