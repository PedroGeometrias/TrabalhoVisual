'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // Definir associações, por exemplo:
      // Cart.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Cart.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });

  return Cart;
};

