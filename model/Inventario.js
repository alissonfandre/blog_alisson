const  db  = require("../sequelize");
const sequelize = require("sequelize");
const Carro = require('./Carro');

const Inventario = db.define('Inventario', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carroId: sequelize.INTEGER,
  quantidade: sequelize.INTEGER
}, {});

Inventario.sync();

Inventario.belongsTo(Carro, { foreignKey: 'carroId' });

module.exports = Inventario;