const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize para o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Arquivo do banco de dados que será criado na raiz do projeto
});

module.exports = sequelize;

