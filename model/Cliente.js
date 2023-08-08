const db = require("../sequelize");
const sequelize = require("sequelize");

const Cliente = db.define('Cliente', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING,
  email: sequelize.STRING,
  telefone: sequelize.STRING,
  endereco: sequelize.TEXT
});

Cliente.sync();

module.exports = Cliente;