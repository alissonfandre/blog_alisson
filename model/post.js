const db = require("../sequelize");
const sequelize = require("sequelize");
const usuario = require("./usuario");

const post = db.define('post', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: sequelize.STRING,
  conteudo: sequelize.STRING,
  autor_id: sequelize.INTEGER
}, {});

post.sync();

post.belongsTo( usuario, { foreignKey: 'autor_id' });

module.exports = post;

