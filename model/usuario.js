const db = require ("../sequelize");
const sequelize = require ("sequelize");

const usuario = db.define('usuario', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: sequelize.STRING,
  email: sequelize.STRING,
});

usuario.sync();

module.exports = usuario;