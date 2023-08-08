const db = require ("../sequelize");
const sequelize = require ("sequelize");

const Carro = db.define('Carro', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  modelo: sequelize.STRING,
  preco: sequelize.FLOAT,
  caracteristicas: sequelize.TEXT
});

Carro.sync();

module.exports = Carro;