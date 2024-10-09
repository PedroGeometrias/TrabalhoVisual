'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // Definir associações se houver, por exemplo:
      // Transaction.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Transaction.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    metodoPagamento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente'
    }
  }, {
    sequelize, // Instância do Sequelize
    modelName: 'Transaction', // Nome do modelo
  });

  return Transaction;
};

