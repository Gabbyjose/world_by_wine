const Sequelize = require("sequelize");
const db = require("../db.js");

const Grapes = db.define("grape", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Grapes;
