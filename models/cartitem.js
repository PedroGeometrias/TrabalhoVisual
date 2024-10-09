'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      // Definir associações, por exemplo:
      // CartItem.belongsTo(models.Cart, { foreignKey: 'cartId' });
      // CartItem.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  CartItem.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    precoTotal: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'CartItem',
  });

  return CartItem;
};

